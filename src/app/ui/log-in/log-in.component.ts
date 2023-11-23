import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  pageLogin: Boolean = true;

  changePage() {
    if (this.pageLogin) {
      this.pageLogin = false;
    } else {
      this.pageLogin = true;
    }
  }
} 
