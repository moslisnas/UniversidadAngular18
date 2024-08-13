import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
//import { AppRoutingModule } from './app-routing.module'; // Older versions of Angular
import { PersonasComponent } from './personas/personas.component';
//import { HttpClientModule } from '@angular/common/http'; // Older versions of Angular

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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
export class AppComponent {
  titulo = 'Listado de Personas';
}
