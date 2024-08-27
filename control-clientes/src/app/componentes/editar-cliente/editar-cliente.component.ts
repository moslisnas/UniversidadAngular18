import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente.model';
import { ClienteServicio } from '../../servicios/cliente.service';
import {
  AlertMessagesService,
  AlertMessagesModule,
} from 'jjwins-angular-alert-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [AlertMessagesModule, FormsModule, NgClass],
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css',
})
export class EditarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };
  id: string;

  constructor(
    private clientesServicio: ClienteServicio,
    private alertMessageService: AlertMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio
      .getCliente(this.id)
      .subscribe((cliente: Cliente | null) => {
        if (cliente) {
          this.cliente = cliente;
        } else {
          // Manejar el caso en el que el cliente es null
          console.warn('Cliente no encontrado');
        }
      });
  }

  guardar(clienteForm: NgForm) {
    const { value, valid } = clienteForm;
    if (!valid) {
      this.alertMessageService.show(
        'Por favor llena el formulario correctamente',
        { cssClass: 'alerts-error', timeOut: 4000 }
      );
    } else {
      value.id = this.id;
      //modificar cliente
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }
  
  eliminar() {
    if (confirm('¿Seguro que desea eliminar el cliente?')) {
      this.clientesServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }
}
