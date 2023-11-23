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
  response: LoginResponse | undefined;

  constructor(private loginService: LoginService) { };

  pageLogin: Boolean = true;

  profileLogin = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
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
      console.log(p.avatar)
      console.log(p.createdAt)
      console.log(p.fullName)
      console.log(p.id)
      console.log(p.mail)
      console.log(p.token)
    })
  }
} 
