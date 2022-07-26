import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { filter, retry } from 'rxjs';
import { DialogComponent } from 'src/app/common-components/dialog/dialog.component';
import { IPageData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { environment } from 'src/environments/environment';
import { NurseHttpService } from '../../services/nurse.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss']
})
export class AllDoctorsComponent implements OnInit {
  public dialogData!: IPageData;
  private loadDocsList!: [];
  private loadAssignedDocsList!: [];
  private loadFor!: string;
  public dataSource!: MatTableDataSource<ITableColsData>;

  public pageInfo: IPageInfo = {
    title: 'All Doctors',
  };

  public colsData: ITableColsData[] = [
    { key: 'name', display: 'Name' },
    { key: 'email', display: 'Email' },
    { key: 'speciality', display: 'Speciality' },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'refresh',
            title: 'Change Request',
            handleAction: () => {
              this.loadInitData();
              this.dialogData.assignedDocsList = this.loadAssignedDocsList;
              this.dialogData.docsList = this.loadDocsList;
              this.dialogData.for = this.loadFor;
              this.openDialog();
              return true;
            }
          },
          {
            icon: 'sms',
            title: 'Send Message',
            color: 'primary',
            handleAction: () => {
              this.dialogData.action = 'message';
              this.dialogData.assignedDocsList = this.loadAssignedDocsList;
              this.dialogData.to = this.loadFor;
              this.openDialog();
              return true;
            }
          },
        ]
      }

    }
  ];

  loadInitData() {
    this.dialogData = {
      action: 'change request',
      title: 'from nurse',
      for: '',
      replacement: '',
      to: '',
      message: '',
      reason: '',
      docsList: [],
      assignedDocsList: []
    }
  }

  constructor(
    private commonHttpService: CommonHttpService,
    private paginatorService: ToggleMatDrawerService,
    private dialog: MatDialog,
    private nurseHttpService: NurseHttpService
  ) { }

  private loadAssigedDocs() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.nurse._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data
            .filter((nurse: { _id: string; }) => nurse._id === localStorage.getItem('_id'))
            .filter((nurse: { assignedDoctor: []; }) => nurse.assignedDoctor.length > 0)
            .at(0)
            .assignedDoctor;

          this.loadFor = data.at(0)._id;
          this.loadAssignedDocsList = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });
    }
    this.loadAllDocs();
  }

  private loadAllDocs() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.doctor._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          this.loadDocsList = Object(response).data.filter(
            (user: { _id: string }) => user._id !== this.loadFor
          );
        }
      });
    }
  }

  private sendRemider(_reqId: string) {
    const loadRequest = this.commonHttpService.createReminder(_reqId);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => console.log(response)
      })
    }
  }

  ngOnInit(): void {
    this.loadAssigedDocs();
    this.loadInitData();
  }

  openDialog() {
    const dialoagRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.dialogData
    });

    dialoagRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.action === 'change request') {
          const data = { for: result.for, replacement: result.replacement, reason: result.reason };
          this.commonHttpService.createChangeRequest(data).subscribe({
            next: (response) => {
              this.sendRemider(Object(response).data._id);
              console.log(response);
            }
          })
        }

        if (result.action === 'message') {
          const data = { to: result.to, text: result.message };
          this.nurseHttpService.sendMessage(data).subscribe({
            next: (response) => {
              console.log(response);
            }
          })
        }
      }
    })
  }

}
