import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  //nombreInput:string = "";
  //apellidoInput:string = "";
  @ViewChild("nombreInput") nombreInput:ElementRef;
  @ViewChild("apellidoInput") apellidoInput:ElementRef;
  
  constructor(private personasService:PersonasService){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personasService.agregarPersona(persona1);
  }
}
