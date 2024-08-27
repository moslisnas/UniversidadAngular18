import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteServicio } from '../../servicios/cliente.service';
import { Cliente } from '../../modelo/cliente.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  AlertMessagesModule,
  AlertMessagesService,
} from 'jjwins-angular-alert-messages';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    AlertMessagesModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  @ViewChild('clienteForm') clienteForm: NgForm;

  @ViewChild('botonCerrar') botonCerrar: ElementRef;

  constructor(
    private clientesServicio: ClienteServicio,
    private alertMessageService: AlertMessagesService
  ) {}

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe((clientes) => {
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

  agregar(clienteForm: NgForm) {
    if (!clienteForm.valid) {
      this.alertMessageService.show(
        'Por favor llena el formulario correctamente',
        { cssClass: 'alerts-error', timeOut: 4000 }
      );
    } else {
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(clienteForm.value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
}
