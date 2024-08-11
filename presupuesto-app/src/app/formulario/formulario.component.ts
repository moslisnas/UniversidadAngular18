import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string = '';
  valorInput: string = '';

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, parseInt(this.valorInput))
      );
    } else {
      this.egresoServicio.egresos.push(
        new Egreso(this.descripcionInput, parseInt(this.valorInput))
      );
    }
  }
}
