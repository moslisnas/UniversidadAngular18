import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { ConfiguracionServicio } from '../../servicios/configuracion.service';
//import { CommonModule } from '@angular/common'; // Older versions of Angular

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [RouterLink], //, CommonModule], // Older versions of Angular
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css',
})
export class CabeceroComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string | null;
  permitirRegistro: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configuracionServicio.getConfiguracion().subscribe((configuracion) => {
      this.permitirRegistro = configuracion?.permitirRegistro ?? false;
    });
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
