import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/common-components/dialog/dialog.component';
import { IPageData, IPageInfo, ITableColsData } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';
import { environment } from 'src/environments/environment';
import { AdminHttpService } from '../../services/admin-http.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss']
})
export class AllDoctorsComponent implements OnInit {

  public pageInfo: IPageInfo = {
    title: 'All Doctors',
    config: {
      isAction: true,
      actions: [
        {
          title: 'Add Doctor',
          icon: 'add',
          handleAction: (x: any) => {
            this.loadInitData();
            this.dialogData.role = environment.roles[1]._id;
            this.dialogData.nurses = this.loadAvailableNurses;
            this.openDialog();
            return true;
          }
        }
      ]
    }
  };

  public dialogData!: IPageData;
  public loadAvailableNurses!: [];
  private _id!: string;

  loadInitData() {
    this.dialogData = {
      action: 'add',
      title: 'doctor',
      name: '',
      email: '',
      role: '',
      speciality: '',
      newNurses: []
    }
  }

  public colsData: ITableColsData[] = [
    { key: 'name', display: 'Name' },
    { key: 'email', display: 'Email' },
    { key: 'speciality', display: 'Speciality' },
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
            handleAction: (x: any) => {
              this.loadInitData();
              this.dialogData.action = 'edit';
              this.dialogData.name = x.name;
              this.dialogData.email = x.email;
              this.dialogData.speciality = x.speciality;
              this.dialogData.role = x.role;
              this._id = x._id;
              this.dialogData.nurses = this.loadAvailableNurses;
              this.openDialog();
              return true;
            }
          },
          {
            icon: 'delete',
            title: 'Delete',
            color: 'warn',
            handleAction: (doctor: any) => {
              this.loadInitData();
              this.dialogData.action = 'delete';
              this.dialogData.title = 'confirm';
              this.dialogData.name = doctor.name;
              this._id = doctor._id;
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

  private loadAllDocs() {
    const loadRequest = this.commonHttpService.getAllUsers();
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const allNurses = Object(response).data.filter((user: {
            assignedDoctor: never[]; role: string;
          }) => user.role === environment.roles[2]._id && user.assignedDoctor.length === 0);
          const allDocs = Object(response).data.filter((user: { role: string; }) => user.role === environment.roles[1]._id);
          this.loadAvailableNurses = allNurses;
          this.dataSource = new MatTableDataSource(allDocs);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });
    }
  }

  ngOnInit(): void {
    this.loadInitData();
    this.loadAllDocs();
  }

  openDialog() {
    const dialoagRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.dialogData
    });

    dialoagRef.afterClosed().subscribe(result => {
      if (result) {
        const data = { name: result.name, email: result.email, role: result.role, speciality: result.speciality, nurses: result.newNurses };
        console.log(data);
        if (result.action === 'add') {
          this.adminHttpService.createDoctor(data).subscribe({
            next: (response) => {
              this.dataSource;
              this.loadAllDocs();
              console.log(response);
            }
          })
        }

        if (result.action === 'edit') {
          this.adminHttpService.editDoctor(data, this._id).subscribe({
            next: (response) => {
              this.loadAllDocs();
              console.log(response);
            }
          })
        }

        if (result.action === 'delete') {
          this.adminHttpService.deleteUser(this._id).subscribe({
            next: (response) => {
              this.loadAllDocs();
              console.log(response);
            }
          })
        }
      }
    })
  }

}
