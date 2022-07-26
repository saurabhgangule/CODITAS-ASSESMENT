import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;
  public dashTitle = 'Admin';
  public user = { name: 'loading...', email: '' };

  public adminMenuData = [
    { name: 'Doctors', link: '../all-doctors', icon: 'vaccines_outline' },
    { name: 'Nurses', link: '../all-nurses', icon: 'groups_2_outline' },
    { name: 'Requests', link: '../all-requests', icon: 'pending_actions_outline' },
    { name: 'Notifications', link: '../all-notifications', icon: 'notifications_outline' }
  ]

  constructor(private commonHttpService: CommonHttpService) { }

  private loadUserProfile() {
    const loadRequest = this.commonHttpService.getProfile();
    if (loadRequest) {
      loadRequest.subscribe({
        next: (response) => {
          const data = Object(response).data;
          this.user.name = data.name;
          this.user.email = data.email;
        }
      })
    }
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }
}
