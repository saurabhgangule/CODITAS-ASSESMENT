import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;
  public dashTitle = 'Nurse';

  public nurseMenuData = [
    { name: 'Doctors', link: '../all-doctors', icon: 'vaccines_outline' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
