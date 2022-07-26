import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { config } from 'rxjs';
import { IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessagesComponent implements OnInit {

  public dataSource!: MatTableDataSource<ITableColsData>;

  public pageInfo: IPageInfo = {
    title: 'All Messages',
  };

  public colsData: ITableColsData[] = [
    {
      key: 'from',
      display: 'From',
      config: {
        isSpecial: true,
        handleSpecial: (user: { name: string }[]) => {
          return user[0].name;
        }
      }
    },
    { key: 'text', display: 'Message' },
    {
      key: 'createdAt',
      display: 'Created At',
      config: {
        isSpecial: true,
        handleSpecial: (date: string) => {
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-yyyy h:mm a');
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
          const newDate = new DatePipe('en-IN').transform(date, 'dd-MMM-yyyy h:mm a');
          return newDate || '';
        }
      }
    }
  ];

  constructor(private commonHttpService: CommonHttpService, private paginatorService: ToggleMatDrawerService) { }

  private loadAllMessages() {
    const loadRequest = this.commonHttpService.getMessages();
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data.filter(
            (message: { from: []; }) => message.from.length
          );

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
