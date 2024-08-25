import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { FormsModule } from '@angular/forms';
import { AlertMessagesModule } from 'jjwins-angular-alert-messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceroComponent, PiePaginaComponent, FormsModule, AlertMessagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'control-clientes';
}
