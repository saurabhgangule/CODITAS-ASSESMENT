import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, ILoginResponse } from 'src/app/models/models';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['manish.sawlani@coditas.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(4)]]
  });

  email = this.loginForm.controls.email;
  password = this.loginForm.controls.password;

  showLoader: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit(): void { }

  private handleUser(response: ILoginResponse) {
    if (response.data) {
      localStorage.setItem('_token', response.data.token);
      localStorage.setItem('_role', response.data.role);
      localStorage.setItem('_id', response.data.userId);
      environment.roles.forEach(each => {
        if (each._id === response.data.role) {
          this.router.navigate([each.route]);
        }
      })
    }
  }

  handleLogin() {
    this.showLoader = true;
    const loginRequest = this.authService.login(<ILogin>this.loginForm.value);
    loginRequest.subscribe({
      next: (response) => {
        this.handleUser(Object(response));
      },
      error: () => {
        this.showLoader = false;
      },
      complete: () => this.showLoader = false
    });
  }

}
