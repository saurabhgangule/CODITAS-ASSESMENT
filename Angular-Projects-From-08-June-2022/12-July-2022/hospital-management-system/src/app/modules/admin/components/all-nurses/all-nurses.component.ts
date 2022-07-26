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

  private dialogData!: IPageData;
  public dataSource!: MatTableDataSource<ITableColsData>;
  private loadDocsList!: [];
  private _id!: string;

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
            this.dialogData.role = environment.nurse._id;
            this.dialogData.docsList = this.loadDocsList;
            this.openDialog();
            return true;
          }
        }
      ]
    }
  };

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
        handleSpecial: (doctor: IPageData[]) => {
          return doctor[0]?.name || 'Doctor not assigned';
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
            handleAction: (nurse: IPageData) => {
              this.loadInitData();
              this.dialogData.action = 'edit';
              this.dialogData.name = nurse.name;
              this.dialogData.email = nurse.email;
              this.dialogData.assignedDoctor = Object(nurse.assignedDoctor?.[0])._id || '';
              this.dialogData.docsList = this.loadDocsList;
              this.dialogData.role = nurse.role;
              this._id = nurse._id || '';
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
  constructor(
    private commonHttpService: CommonHttpService,
    private paginatorService: ToggleMatDrawerService,
    private dialog: MatDialog,
    private adminHttpService: AdminHttpService
  ) { }

  private getAllNurses() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.nurse._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          this.dataSource = new MatTableDataSource(Object(response).data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });
    }
    this.getAllDocs();
  }

  private getAllDocs() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.doctor._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          this.loadDocsList = Object(response).data;
        }
      })
    }
  }

  ngOnInit(): void {
    this.loadInitData();
    this.getAllNurses();
  }

  openDialog() {
    const dialoagRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.dialogData
    });

    dialoagRef.afterClosed().subscribe(result => {
      if (result) {
        const data = {
          name: result.name,
          email: result.email,
          role: result.role,
          assignedDoctor: result.assignedDoctor ? result.assignedDoctor : null
        };

        if (result.action === 'add') {
          this.adminHttpService.createNurse(data).subscribe({
            next: (response) => {
              this.dataSource;
              this.getAllNurses();
              console.log(response);
            }
          })
        }

        if (result.action === 'edit') {
          this.adminHttpService.editNurse(data, this._id).subscribe({
            next: (response) => {
              this.getAllNurses();
              console.log(response);
            }
          })
        }

        if (result.action === 'delete') {
          this.adminHttpService.deleteUser(this._id).subscribe({
            next: (response) => {
              this.getAllNurses();
              console.log(response);
            }
          })
        }
      }
    })
  }

}

