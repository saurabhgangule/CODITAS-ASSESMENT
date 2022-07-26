import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from 'src/app/models/models';
import { CommonHttpService } from 'src/app/modules/common-services/common-http.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {
  @Input() pageInfo!: IPageInfo;
  public dashTitle = 'Nurse';
  public user = { name: 'loading...', email: '' };

  public nurseMenuData = [
    { name: 'Doctors', link: '../all-doctors', icon: 'vaccines_outline' }
  ];

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
