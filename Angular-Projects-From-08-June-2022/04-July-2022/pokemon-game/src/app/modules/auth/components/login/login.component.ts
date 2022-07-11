import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsUserActiveService } from 'src/app/shared-services/is-user-active.service';
import { ILogin } from '../../../../models/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['professor.oak@pokedex.com', [Validators.required, Validators.email]],
    password: ['pikapi', [Validators.required, Validators.minLength(4)]]
  });
  email = this.loginForm.controls.email;
  password = this.loginForm.controls.password;
  showLoader: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private isUserActiveService: IsUserActiveService) { }

  ngOnInit(): void {
    if (this.isUserActiveService.isActive()) {
      this.router.navigate(['/home']);
    }
  }

  handleLogin() {
    this.showLoader = true;
    const loginRequest = this.authService.login(<ILogin>this.loginForm.value);
    loginRequest.subscribe({
      next: (response) => {
        if (Object(response).data) {
          localStorage.setItem('_token', Object(response).data.token);
          this.router.navigate(['home']);
        }
      },
      error: (e) => {
        this.showLoader = false;
      },
      complete: () => this.showLoader = false
    });
  }

}
