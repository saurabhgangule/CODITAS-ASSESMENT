import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../common/input/input.component';
import { ButtonComponent } from '../common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChangeOnHoverDirective } from '../change-on-hover.directive';
import { SelectComponent } from '../common/select/select.component';
import { ChangeDatePipe } from '../date-pipe';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    ChangeOnHoverDirective,
    ChangeDatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    MaterialModule,
    ChangeOnHoverDirective,
    ChangeDatePipe
  ]
})
export class SharedModule { }
