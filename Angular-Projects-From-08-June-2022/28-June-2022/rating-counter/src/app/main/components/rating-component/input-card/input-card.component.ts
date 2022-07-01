import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => InputCardComponent)
  }]
})
export class InputCardComponent implements OnInit, ControlValueAccessor {
  @Input() title!: string;
  value: number = 0;

  constructor() { }
  registerOnTouched(): void { }

  ngOnInit(): void {
  }

  onChange: Function = (_value: Event) => { };

  registerOnChange(angularProvidedFunction: Function): void {
    this.onChange = angularProvidedFunction;
  }

  writeValue(angularProvidedValue: string): void {
    this.value = +angularProvidedValue;
  }

}
