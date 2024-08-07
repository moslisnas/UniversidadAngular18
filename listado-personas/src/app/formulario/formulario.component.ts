import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput:string = "";f
  //apellidoInput:string = "";
  @ViewChild("nombreInput") nombreInput:ElementRef;
  @ViewChild("apellidoInput") apellidoInput:ElementRef;
  
  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(persona1);
  }
}
