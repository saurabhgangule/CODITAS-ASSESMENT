import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';
import { AllNotificationsComponent } from './components/all-notifications/all-notifications.component';
import { AllNursesComponent } from './components/all-nurses/all-nurses.component';
import { AllRequestsComponent } from './components/all-requests/all-requests.component';

const routes: Routes = [
    { path: '', redirectTo: 'all-doctors', pathMatch: 'full' },
    { path: 'all-doctors', component: AllDoctorsComponent },
    { path: 'all-nurses', component: AllNursesComponent },
    { path: 'all-requests', component: AllRequestsComponent },
    { path: 'all-notifications', component: AllNotificationsComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }