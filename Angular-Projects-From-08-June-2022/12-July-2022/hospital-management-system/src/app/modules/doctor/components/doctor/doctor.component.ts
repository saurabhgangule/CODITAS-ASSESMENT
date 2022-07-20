import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;

  public dashTitle = 'Doctor';

  public doctorMenuData = [
    { name: 'Home', link: '../home', icon: 'home_outline' },
    { name: 'Requests', link: '../all-requests', icon: 'pending_actions' },
    { name: 'Messages', link: '../all-messages', icon: 'chat_outline' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
