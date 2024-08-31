import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AlertMessagesModule,
  AlertMessagesService,
} from 'jjwins-angular-alert-messages';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, AlertMessagesModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessagesService,
    private loginService: LoginService
  ) {}

  registro() {
    this.loginService
      .registrarse(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.alertMessageService.show(error.message, {
          cssClass: 'alerts-error, timeou: 4000',
        });
      });
  }
}
