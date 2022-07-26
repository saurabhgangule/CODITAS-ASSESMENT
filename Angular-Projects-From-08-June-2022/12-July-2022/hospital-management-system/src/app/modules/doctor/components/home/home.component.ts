import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/common-components/dialog/dialog.component';
import { IPageData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageInfo: IPageInfo = {
    title: 'All Nurses',
  };

  private dialogData!: IPageData;
  private loadNewNurses!: [];
  public dataSource!: MatTableDataSource<ITableColsData>;


  loadInitData() {
    this.dialogData = {
      action: 'change request',
      title: 'from doctor',
      for: '',
      replacement: '',
      reason: '',
      nurses: [],
      newNurses: [],
    }
  }

  public colsData: ITableColsData[] = [
    { key: 'name', display: 'Name' },
    { key: 'email', display: 'Email' },
    {
      key: 'createdAt',
      display: 'Created At',
      config: {
        isSpecial: true,
        handleSpecial: (date: string) => {
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-yyyy (h:mm a)')
          return newDate || '';
        }
      }
    },
    {
      key: 'updatedAt',
      display: 'Updated At',
      config: {
        isSpecial: true,
        handleSpecial: (date: string) => {
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-yyyy (h:mm a)')
          return newDate || '';
        }
      }
    },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'refresh',
            title: 'Change Request',
            handleAction: (nurse: { _id: string, name: string }) => {
              this.loadInitData();
              this.dialogData.for = nurse._id;
              this.dialogData.newNurses = this.loadNewNurses;
              this.dialogData.nurses?.push(nurse);
              this.openDialog();
              return true;
            }
          }
        ]
      }

    }
  ];

  constructor(
    private commonHttpService: CommonHttpService,
    private paginatorService: ToggleMatDrawerService,
    private dialog: MatDialog
  ) { }

  private nursesLoader(_id?: string) {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.nurse._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data =
            Object(response).data
              .filter(
                (nurse: { assignedDoctor: { _id: string }[]; }) =>
                  nurse.assignedDoctor.length > 0 && nurse.assignedDoctor[0]._id === localStorage.getItem('_id')
              );
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });

      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data.filter(
            (user: { assignedDoctor: [] }) => !user.assignedDoctor.length
          );
          this.loadNewNurses = data;
        }
      });

      if (_id) {
        this.sendReminder(_id);
      }
    }
  }

  private sendReminder(_id: string) {
    const loadRequest = this.commonHttpService.createReminder(_id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          console.log(response);
        }
      })
    }
  }

  ngOnInit(): void {
    this.loadInitData();
    this.nursesLoader();
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
              this.nursesLoader(Object(response).data._id);
            }
          })
        }
      }
    })
  }
}
