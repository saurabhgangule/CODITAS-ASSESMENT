import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { InputComponent } from '../common-components/input/input.component';
import { ButtonComponent } from '../common-components/button/button.component';
import { SelectComponent } from '../common-components/select/select.component';
import { SidebarComponent } from '../common-components/sidebar/sidebar.component';
import { ToolbarComponent } from '../common-components/toolbar/toolbar.component';
import { TableComponent } from '../common-components/table/table.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '../common-components/dialog/dialog.component';



@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent,
        SelectComponent,
        SidebarComponent,
        ToolbarComponent,
        TableComponent,
        DialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        InputComponent,
        ButtonComponent,
        SelectComponent,
        SidebarComponent,
        ToolbarComponent,
        TableComponent,
        DialogComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ]
})
export class SharedModule { }
