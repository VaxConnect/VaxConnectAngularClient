import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../modules/login.module';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private loginService: LoginService) { };

  pageLogin: Boolean = true;

  profileLogin = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  })

  profileRegister = new FormGroup({
    mail: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    phone: new FormControl(''),
    bDay: new FormControl('')
  })

  changePage() {
    if (this.pageLogin) {
      this.pageLogin = false;
    } else {
      this.pageLogin = true;
    }
  }

  login() {
    this.loginService.LoginResponse(this.profileLogin.value.mail!, this.profileLogin.value.password!).subscribe(p => {
      localStorage.setItem('TOKEN', p.token)
      localStorage.setItem('USER_ID', p.id)
    })
  }

  register() {
    this.loginService.RegisterResponse
  }
} 
