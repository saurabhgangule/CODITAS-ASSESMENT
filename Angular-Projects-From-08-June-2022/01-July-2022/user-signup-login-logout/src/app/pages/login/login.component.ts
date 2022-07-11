import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAlert, IUser } from 'src/app/models/iterface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  @Output() isUserLoggedInEmit = new EventEmitter();
  alertMessage: IAlert = { message: 'login details not found', isError: true };
  showAlert = false;

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void { }

  handleLogin() {
    this.httpService.getUsers().pipe().subscribe(response => {
      const user = response.find((each: IUser) => {
        return each.email === this.loginForm.value.email && each.password === this.loginForm.value.password;
      });
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
        this.isUserLoggedInEmit.emit();
        this.loginForm.reset();
        this.alertMessage.message = 'login is successfull';
        this.alertMessage.isError = false;
      }
      this.showAlert = true;
      setInterval(() => this.showAlert = false, 2000);
    })
  }

}
