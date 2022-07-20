import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';
import { AllNursesComponent } from './components/all-nurses/all-nurses.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllRequestsComponent } from './components/all-requests/all-requests.component';
import { AllNotificationsComponent } from './components/all-notifications/all-notifications.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    AllDoctorsComponent,
    AllNursesComponent,
    AdminComponent,
    AllRequestsComponent,
    AllNotificationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
