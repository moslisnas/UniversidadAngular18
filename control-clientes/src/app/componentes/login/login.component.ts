import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertMessagesModule,
  AlertMessagesService,
} from 'jjwins-angular-alert-messages';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertMessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessagesService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.loginService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.alertMessageService.show(error.message, {
          cssClass: 'alerts-error, timeou: 4000',
        });
      });
  }
}
