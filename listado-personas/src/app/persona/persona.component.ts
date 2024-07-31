import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  @Input() persona:Persona;
  @Input() indice:number;
}
