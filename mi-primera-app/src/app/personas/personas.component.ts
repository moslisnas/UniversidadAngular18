import { Component } from "@angular/core";
import { PersonaComponent } from "../persona/persona.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrl: "personas.component.css",
    imports: [PersonaComponent, FormsModule],//, CommonModule], //Older versions of Angular
    standalone: true
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = "";
    titulo = "Ingeniero";
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = "Persona agregada";
    }
}