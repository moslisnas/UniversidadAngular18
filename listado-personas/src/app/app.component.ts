import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
//import { AppRoutingModule } from './app-routing.module'; // Older versions of Angular
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PersonaComponent,
    CommonModule,
    FormularioComponent,
    //AppRoutingModule, // Older versions of Angular
    PersonasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';
}
