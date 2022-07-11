import { Component, Input, OnInit } from '@angular/core';
import { IUser, IUserAfterLogin } from 'src/app/models/iterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() isUserLoggedIn: boolean = false;
  @Input() currentUser!: IUserAfterLogin;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!) ?? this.currentUser;
    if(this.currentUser) {
      this.isUserLoggedIn = true;
    }
  }

  handleLogout() {
    localStorage.removeItem('currentUser');
    this.isUserLoggedIn = false;
  }

}
