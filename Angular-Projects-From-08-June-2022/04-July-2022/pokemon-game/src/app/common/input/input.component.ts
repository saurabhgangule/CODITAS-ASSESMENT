import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { MatFormFieldControl } from "@angular/material/form-field";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type!: string;
  value!: string;

  constructor() {}

  ngOnInit(): void {
  }

  onChange(e: Function) { }
  onTouched(e: Function) { }

  registerOnChange(angularProvidedFunction: any): void {
    this.onChange = angularProvidedFunction;
  }

  registerOnTouched(angularProvidedFunction: any): void {
    this.onTouched = angularProvidedFunction;
  }
  writeValue(angularProvidedValue: any): void {
    this.value = angularProvidedValue;
  }
}
