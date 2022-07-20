import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;
  public dashTitle = 'Admin';

  public adminMenuData = [
    { name: 'Doctors', link: '../all-doctors', icon: 'vaccines_outline' },
    { name: 'Nurses', link: '../all-nurses', icon: 'groups_2_outline' },
    { name: 'Requests', link: '../all-requests', icon: 'pending_actions_outline' },
    { name: 'Notifications', link: '../all-notifications', icon: 'notifications_outline' }
  ]

  constructor() { }

  ngOnInit(): void { }
}
