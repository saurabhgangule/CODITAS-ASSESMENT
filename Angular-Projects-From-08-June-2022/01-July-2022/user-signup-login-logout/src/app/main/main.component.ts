import { Component, OnInit } from '@angular/core';
import { IUserAfterLogin } from '../models/iterface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  currentUser!: IUserAfterLogin;
  constructor() { }

  ngOnInit(): void {
  }

  handleUserLoggedIn(flag: boolean) {
    this.isUserLoggedIn = flag;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!)
  }

}
