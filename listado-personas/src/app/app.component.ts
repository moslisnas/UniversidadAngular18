import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
//import { AppRoutingModule } from './app-routing.module'; // Older versions of Angular
import { PersonasComponent } from './personas/personas.component';
//import { HttpClientModule } from '@angular/common/http'; // Older versions of Angular
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    PersonaComponent,
    CommonModule,
    FormularioComponent,
    PersonasComponent,
    //HttpClientModule, // Older versions of Angular
    //AppRoutingModule, // Older versions of Angular
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: environment.ApiKey,
      authDomain: 'listado-personas-68ad7.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
