import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
//import { CommonModule } from '@angular/common'; // Older versions of Angular
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormularioComponent, RouterOutlet], //, CommonModule], // Older versions of Angular
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
