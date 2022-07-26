import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITableColsData } from 'src/app/models/models';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input('dataSource') tableDataSource!: MatTableDataSource<any>;
  @Input() action!: string;
  @Input() colsData: ITableColsData[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private paginatorService: ToggleMatDrawerService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.paginatorService.setPaginator(this.paginator);
  }

  get keys() {
    return this.colsData.map(({ key }) => key);
  }

}
