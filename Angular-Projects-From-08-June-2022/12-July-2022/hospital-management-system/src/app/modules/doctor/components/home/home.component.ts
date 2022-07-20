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

  public dialogData!: IPageData;
  public loadNewNurses!: [];

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
    { key: 'createdAt', display: 'Created At' },
    { key: 'updatedAt', display: 'Updated At' },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'refresh',
            title: 'Change Request',
            handleAction: (x: any) => {
              this.loadInitData();
              this.dialogData.for = x._id;
              this.dialogData.newNurses = this.loadNewNurses;
              this.dialogData.nurses?.push(x);
              this.openDialog();
              return true;
            }
          }
        ]
      }

    }
  ];

  dataSource!: MatTableDataSource<unknown>;

  constructor(private commonHttpService: CommonHttpService, private paginatorService: ToggleMatDrawerService, private dialog: MatDialog) { }

  private nursesLoader() {
    // const loadRequest = this.commonHttpService.getAllUsers();
    const loadRequest = this.commonHttpService.getUsersBasedOnCondition(environment.roles[2]._id, 'true');
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data =
            Object(response).data
              .filter((nurse: { assignedDoctor: string | any[]; }) => nurse.assignedDoctor.length > 0)
              .filter((nurse: { assignedDoctor: { _id: string | null; }[]; }) => nurse.assignedDoctor[0]._id === localStorage.getItem('_id'));
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });

      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data.filter((user: { assignedDoctor: any; }) => !user.assignedDoctor.length);
          this.loadNewNurses = data;
        }
      });
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
              this.nursesLoader();
              console.log(response);
            }
          })
        }
      }
    })
  }
}
