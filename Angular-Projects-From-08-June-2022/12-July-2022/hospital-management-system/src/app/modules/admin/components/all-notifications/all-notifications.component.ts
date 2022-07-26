import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { AdminHttpService } from '../../services/admin-http.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {
  public dataSource!: MatTableDataSource<ITableColsData>;

  public pageInfo: IPageInfo = {
    title: 'All Notifications'
  };

  public colsData: ITableColsData[] = [
    {
      key: 'request',
      display: 'Reminder From',
      config: {
        isSpecial: true,
        handleSpecial: (user: any) => {
          return user.from[0].name;
        }
      }
    },
    {
      key: 'createdAt',
      display: 'Created At',
      config: {
        isSpecial: true,
        handleSpecial: (date: string) => {
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-YYYY (h:mm a)');
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
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-YYYY (h:mm a)');
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
            icon: 'delete',
            title: 'Delete',
            color: 'warn',
            handleAction: (reminder: { _id: string }) => {
              this.deleteReminder(reminder._id);
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
    private adminHttpService: AdminHttpService
  ) { }

  private loadAllReminders() {
    const loadRequest = this.commonHttpService.getReminders();
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data.filter(
            (req: { request: { from: []; }; }) => {
              return req.request.from.length > 0;
            }
          );
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });
    }
  }

  private deleteReminder(_id: string) {
    const loadRequest = this.adminHttpService.deleteRemider(_id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          console.log(response);
          this.loadAllReminders();
        }
      })
    }
  }



  ngOnInit(): void {
    this.loadAllReminders();
  }

}
