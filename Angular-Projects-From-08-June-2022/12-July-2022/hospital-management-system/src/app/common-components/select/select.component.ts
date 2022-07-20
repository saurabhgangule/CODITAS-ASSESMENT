import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SelectComponent, multi: true }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  @Input() data!: any;
  @Input('currentValue') value!: string | string[];
  @Input() multi: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) { }
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
