import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { demoTableData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { environment } from 'src/environments/environment';
import { AdminHttpService } from '../../services/admin-http.service';

@Component({
  selector: 'app-requests',
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
          return user[0].name;
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
            icon: 'check',
            title: 'Approve',
            color: 'primary',
            handleAction: (user: any) => {
              const _id = user._id;
              const toStatus = environment.statusApproved;
              this.updateChangeRequest(_id, toStatus);
              return true;
            }
          },
          {
            icon: 'close',
            title: 'Reject',
            color: 'warn',
            handleAction: (user: any) => {
              const _id = user._id;
              const toStatus = environment.statusRejected;
              this.updateChangeRequest(_id, toStatus);
              return true;
            }
          }
        ]
      }

    }
  ];

  dataSource!: MatTableDataSource<unknown>;
  constructor(private adminHttpService: AdminHttpService, private paginatorSerevice: ToggleMatDrawerService) { }

  private loadAllRequests() {
    const loadAllRequest = this.adminHttpService.getChangeRequests();
    loadAllRequest.subscribe({
      next: (response) => {
        const data = Object(response).data.filter((user: { for: []; from: []; }) => user.for.length && user.from.length);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginatorSerevice.getPaginator();
      }
    })
  }

  private updateChangeRequest(_id: string, toStatus: string) {
    const data = { status: toStatus };
    const updateChangeRequest = this.adminHttpService.updateChangeRequest(_id, data);
    updateChangeRequest.subscribe({
      next: (response) => {
        this.loadAllRequests();
        console.log(response);
      }
    })
  }

  ngOnInit(): void {
    this.loadAllRequests();
  }

}
