import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() label!: string;
  @Input() data!: any;
  @Input('currentValue') value!: number;

  constructor() { }

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
