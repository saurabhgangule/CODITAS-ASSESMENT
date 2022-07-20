import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';

const routes: Routes = [
    { path: '', redirectTo: 'all-doctors', pathMatch: 'full' },
    { path: 'all-doctors', component: AllDoctorsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NurseRoutingModule { }