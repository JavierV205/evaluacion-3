import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usurio = '';
  contraseña = '';
  mensaje = '';
  constructor(
    private biblioteca: BibliotecaService,
    private router: Router
  ) { }

  ingresar() {
    if (this.biblioteca.login(this.usurio, this.contraseña)) {
      this.router.navigate(['/login']);

    } else {
      this.mensaje = "Usuario o contraseña incorrectas";
    }
  }
}
