import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  operandoA: number;
  operandoB: number;
  @Output() resultadoSuma = new EventEmitter<number>();

  sumar(): void {
    this.resultadoSuma.emit(this.operandoA + this.operandoB);
  }
}
