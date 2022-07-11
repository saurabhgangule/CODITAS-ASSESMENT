import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() makeDisable!: boolean;
  @Input() buttonType!: string;
  @Input() showLoader!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
