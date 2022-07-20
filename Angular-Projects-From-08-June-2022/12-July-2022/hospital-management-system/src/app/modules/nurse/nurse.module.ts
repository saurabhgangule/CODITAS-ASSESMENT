import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseComponent } from './components/nurse/nurse.component';
import { NurseRoutingModule } from './nurse-routing.module';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';



@NgModule({
  declarations: [
    NurseComponent,
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NurseRoutingModule
  ]
})
export class NurseModule { }
