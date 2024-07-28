import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo:string = "Aplicación de Calculadora";
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  sumar():void{
    this.resultado = this.operandoA+this.operandoB;
  }
}
