import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/common-components/dialog/dialog.component';
import { IPageData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { environment } from 'src/environments/environment';
import { AdminHttpService } from '../../services/admin-http.service';

@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.scss']
})
export class AllNursesComponent implements OnInit {
  public pageInfo: IPageInfo = {
    title: 'All Nurses',
    config: {
      isAction: true,
      actions: [
        {
          title: 'Add Nurse',
          icon: 'add',
          handleAction: () => {
            this.loadInitData();
            this.dialogData.role = environment.roles[2]._id;
            this.dialogData.docsList = this.loadDocsList;
            this.openDialog();
            return true;
          }
        }
      ]
    }
  };

  public dialogData!: IPageData;
  public loadDocsList!: [];
  private _id!: string;

  loadInitData() {
    this.dialogData = {
      action: 'add',
      title: 'nurse',
      name: '',
      email: '',
      role: '',
      assignedDoctor: ''
    }
  }

  public colsData: ITableColsData[] = [
    { key: 'name', display: 'Name' },
    { key: 'email', display: 'Email' },
    {
      key: 'assignedDoctor',
      display: 'Assigned Doctor',
      config: {
        isSpecial: true,
        handleSpecial: (x) => {
          return x[0]?.name || '[Null]';
        },
      }
    },
    {
      key: 'action',
      display: 'Action',
      config: {
        isAction: true,
        actions: [
          {
            icon: 'edit',
            title: 'Edit',
            color: 'primary',
            handleAction: (nurse: any) => {
              this.loadInitData();
              this.dialogData.action = 'edit';
              this.dialogData.name = nurse.name;
              this.dialogData.email = nurse.email;
              this.dialogData.assignedDoctor = nurse.assignedDoctor[0]?._id || '';
              this.dialogData.docsList = this.loadDocsList;
              this.dialogData.role = nurse.role;
              this._id = nurse._id;
              this.openDialog();
              return true;
            }
          },
          {
            icon: 'delete',
            title: 'Delete',
            color: 'warn',
            handleAction: (nurse: any) => {
              this.loadInitData();
              this.dialogData.action = 'delete';
              this.dialogData.title = 'confirm';
              this.dialogData.name = nurse.name;
              this._id = nurse._id;
              this.openDialog();
              return true;
            }
          }
        ]
      }

    }
  ];

  dataSource!: MatTableDataSource<unknown>;
  constructor(private commonHttpService: CommonHttpService, private paginatorService: ToggleMatDrawerService, private dialog: MatDialog, private adminHttpService: AdminHttpService) { }

  private loadAllNurses() {
    const loadRequest = this.commonHttpService.getAllUsers();
    loadRequest.subscribe({
      next: (response) => {
        const allNurses = Object(response).data.filter((user: { role: string; }) => user.role === environment.roles[2]._id);
        const allDocs = Object(response).data.filter((user: { role: string; }) => user.role === environment.roles[1]._id);
        this.loadDocsList = allDocs;
        this.dataSource = new MatTableDataSource(allNurses);
        this.dataSource.paginator = this.paginatorService.getPaginator();
      }
    });
  }

  ngOnInit(): void {
    this.loadInitData();
    this.loadAllNurses();
  }

  openDialog() {
    const dialoagRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.dialogData
    });

    dialoagRef.afterClosed().subscribe(result => {
      if (result) {
        const data = { name: result.name, email: result.email, role: result.role, assignedDoctor: result.assignedDoctor ? result.assignedDoctor : null };

        if (result.action === 'add') {
          this.adminHttpService.createNurse(data).subscribe({
            next: (response) => {
              this.dataSource;
              this.loadAllNurses();
              console.log(response);
            }
          })
        }

        if (result.action === 'edit') {
          this.adminHttpService.editNurse(data, this._id).subscribe({
            next: (response) => {
              this.loadAllNurses();
              console.log(response);
            }
          })
        }

        if (result.action === 'delete') {
          this.adminHttpService.deleteUser(this._id).subscribe({
            next: (response) => {
              this.loadAllNurses();
              console.log(response);
            }
          })
        }
      }
    })
  }

}

