import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './components/doctor/doctor.component';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AllRequestsComponent } from './components/all-requests/all-requests.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';



@NgModule({
  declarations: [
    DoctorComponent,
    HomeComponent,
    AllRequestsComponent,
    AllMessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
