import { Component } from "@angular/core";
import { PersonaComponent } from "../persona/persona.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrl: "personas.component.css",
    imports: [PersonaComponent, FormsModule],
    standalone: true
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = "No se ha agregado ninguna persona";
    titulo = "Ingeniero";

    agregarPersona(){
        this.mensaje = "Persona agregada";
    }
}