import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {
    this.ingresos = this.ingresoServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }
  getEgresoTotal() {
    let egresoTotal = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
