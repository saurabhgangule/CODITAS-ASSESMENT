import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { retry } from 'rxjs';
import { demoTableData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessagesComponent implements OnInit {
  public pageInfo: IPageInfo = {
    title: 'All Messages',
  };

  public colsData: ITableColsData[] = [
    {
      key: 'from',
      display: 'From',
      config: {
        isSpecial: true,
        handleSpecial: (x: any) => {
          return x[0].name;
        }
      }
    },
    { key: 'text', display: 'Message' },
    { key: 'createdAt', display: 'Created At' },
    { key: 'updatedAt', display: 'Updated At' }
  ];

  dataSource!: MatTableDataSource<unknown>;

  constructor(private commonHttpService: CommonHttpService, private paginatorService: ToggleMatDrawerService) { }

  private loadAllMessages() {
    const loadRequest = this.commonHttpService.getMessages(localStorage.getItem('_token') ?? '');
    if (loadRequest) {
      loadRequest.subscribe(
        {
          next: (response) => {
            const data = Object(response).data.filter((message: { from: any; }) => message.from.length);

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginatorService.getPaginator();
          }
        })
    }
  }

  ngOnInit(): void {
    this.loadAllMessages();
  }

}
