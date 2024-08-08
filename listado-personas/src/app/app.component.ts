import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from "./persona/persona.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonaComponent, CommonModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas:Persona[] = [];

  constructor(private personasService: PersonasService){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}
