import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css',
})
export class CabeceroComponent {
  @Input() presupuestoTotal: number = 0;
  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;
}
