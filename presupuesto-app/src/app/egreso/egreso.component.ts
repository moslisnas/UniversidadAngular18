import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css',
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number = 0;

  constructor(private egresoServicio: EgresoServicio) {}

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
