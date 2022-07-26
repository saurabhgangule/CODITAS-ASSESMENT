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

  private dialogData!: IPageData;
  private loadAvailableNurses!: [];
  private _id!: string;
  public dataSource!: MatTableDataSource<ITableColsData>;


  public pageInfo: IPageInfo = {
    title: 'All Doctors',
    config: {
      isAction: true,
      actions: [
        {
          title: 'Add Doctor',
          icon: 'add',
          handleAction: () => {
            this.loadInitData();
            this.dialogData.role = environment.doctor._id;
            this.dialogData.nurses = this.loadAvailableNurses;
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
            handleAction: (doctor: IPageData) => {
              this.loadInitData();
              this.dialogData.action = 'edit';
              this.dialogData.name = doctor.name;
              this.dialogData.email = doctor.email;
              this.dialogData.speciality = doctor.speciality;
              this.dialogData.role = doctor.role;
              this._id = doctor._id ?? '';
              this.dialogData.nurses = this.loadAvailableNurses;
              this.openDialog();
              return true;
            }
          },
          {
            icon: 'delete',
            title: 'Delete',
            color: 'warn',
            handleAction: (doctor: IPageData) => {
              this.loadInitData();
              this.dialogData.action = 'delete';
              this.dialogData.title = 'confirm';
              this.dialogData.name = doctor.name;
              this._id = doctor._id ?? '';
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

  private loadAllDocs() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.doctor._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          this.dataSource = new MatTableDataSource(Object(response).data);
          this.dataSource.paginator = this.paginatorService.getPaginator();
        }
      });
    }
    this.getAvailableNurses()
  }

  private getAvailableNurses() {
    const loadRequest = this.commonHttpService.getUsersBasedOnRole(environment.nurse._id);
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          this.loadAvailableNurses = Object(response).data.filter(
            (nurse: { assignedDoctor: string[]; }) => nurse.assignedDoctor.length === 0
          );
        }
      })
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
        const data = {
          name: result.name,
          email: result.email,
          role: result.role,
          speciality: result.speciality,
          nurses: result.newNurses
        };

        console.log(data)

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
