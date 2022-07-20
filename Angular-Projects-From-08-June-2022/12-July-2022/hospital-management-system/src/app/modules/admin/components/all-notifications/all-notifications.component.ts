import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { demoTableData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { AdminHttpService } from '../../services/admin-http.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {
  public pageInfo: IPageInfo = {
    title: 'All Notifications'
  };

  public colsData: ITableColsData[] = [
    {
      key: 'request',
      display: 'Reminder From',
      config: {
        isSpecial: true,
        handleSpecial: (x: any) => {
          return x.from[0].name;
        }
      }
    },
    { key: 'deleted', display: 'Status' },
    { key: 'createdAt', display: 'Created At' },
    { key: 'updatedAt', display: 'Updated At' },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'delete',
            title: 'Delete',
            color: 'warn'
          }
        ]
      }
    }
  ];

  dataSource!: MatTableDataSource<unknown>;


  constructor(private adminHttpService: AdminHttpService, private paginatorService: ToggleMatDrawerService) { }

  private loadAllReminders() {
    const loadAllRemindersRequest = this.adminHttpService.getReminders();
    loadAllRemindersRequest.subscribe({
      next: (response) => {
        const data = Object(response).data.filter((request: { from: any[]; }) => request.from);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginatorService.getPaginator();
      }
    });
  }

  ngOnInit(): void {
    this.loadAllReminders();
  }

}
