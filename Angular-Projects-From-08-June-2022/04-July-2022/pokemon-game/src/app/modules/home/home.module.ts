import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [
        HomeComponent,
        DialogComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ]
})
export class HomeModule { }
