import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { IAlert, IUser } from 'src/app/models/iterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  alertMessage: IAlert = { message: 'something went wrong', isError: true };
  showAlert = false;

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void { }

  handleRegister() {
    this.httpService.createUser(this.registerForm.value).subscribe(response => {
      if (response) {
        this.alertMessage.message = 'user registered successfully';
        this.alertMessage.isError = false;
      }
      this.showAlert = true;
      setInterval(() => this.showAlert = false, 2000);
    })
    this.registerForm.reset();
  }

}
