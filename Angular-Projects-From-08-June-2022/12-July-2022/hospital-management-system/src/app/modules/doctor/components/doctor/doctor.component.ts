import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;
  public user = { name: 'loading...', email: '' };

  public dashTitle = 'Doctor';

  public doctorMenuData = [
    { name: 'Home', link: '../home', icon: 'home_outline' },
    { name: 'Requests', link: '../all-requests', icon: 'pending_actions' },
    { name: 'Messages', link: '../all-messages', icon: 'chat_outline' }
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
