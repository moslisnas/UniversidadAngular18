import { Component, OnInit } from '@angular/core';
import { ClienteServicio } from '../../servicios/cliente.service';
import { Cliente } from '../../modelo/cliente.model';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteServicio: ClienteServicio) {}

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach((cliente) => {
        if (cliente.saldo !== undefined) {
          saldoTotal += cliente.saldo;
        }
      });
    }
    return saldoTotal;
  }
}
