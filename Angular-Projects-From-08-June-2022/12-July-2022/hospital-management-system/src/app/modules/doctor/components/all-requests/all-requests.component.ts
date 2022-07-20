import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { demoTableData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent implements OnInit {
  public pageInfo: IPageInfo = {
    title: 'All Requests',
  };

  public colsData: ITableColsData[] = [
    {
      key: 'for',
      display: 'For',
      config: {
        isSpecial: true,
        handleSpecial: (user: any) => {
          return user[0].name;
        }
      }
    },
    {
      key: 'from',
      display: 'From',
      config: {
        isSpecial: true,
        handleSpecial: (user: any) => {
          // return user[0].name;
          return "You"
        }
      }
    },
    {
      key: 'replacement',
      display: 'Replacement',
      config: {
        isSpecial: true,
        handleSpecial: (user: any) => {
          return user[0].name;
        }
      }
    },
    { key: 'reason', display: 'Reason' },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'notifications_active',
            title: 'Reminder',
            color: 'primary',
            handleAction: (request: any) => {
              console.log(request);
              this.sendReminder(request._id);
              return true;
            }
          }
        ]
      }

    }
  ];

  public tableDataSource: unknown[] = [];


  dataSource!: MatTableDataSource<unknown>;

  constructor(private commonHttpService: CommonHttpService, private paginatorSerevice: ToggleMatDrawerService) { }

  private loadAllRequests() {
    const loadRequest = this.commonHttpService.getChangeRequests(localStorage.getItem('_token') ?? '');
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data.filter((user: { for: []; from: []; }) => user.for.length && user.from.length);
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginatorSerevice.getPaginator();
        }
      })
    }
  }

  private sendReminder(_id: string) {
    const loadRequest = this.commonHttpService.createReminder(_id, localStorage.getItem('_token') ?? '');
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          console.log(response);
        }
      })
    }
  }

  ngOnInit(): void {
    this.loadAllRequests();
  }

}
