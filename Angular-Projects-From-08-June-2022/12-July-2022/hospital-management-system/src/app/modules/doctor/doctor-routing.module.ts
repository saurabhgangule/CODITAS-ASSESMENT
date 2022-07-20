import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AllRequestsComponent } from './components/all-requests/all-requests.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'all-requests', component: AllRequestsComponent },
    { path: 'all-messages', component: AllMessagesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule { }