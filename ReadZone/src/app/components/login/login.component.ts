import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = '';
  password = '';
  mensaje = '';

  constructor(
    private biblioteca: BibliotecaService,
    private router: Router
  ) { }

  ingresar() {
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      this.mensaje = '!!!!Debes de ingresar todos los campos¡¡¡¡';
      return;
    }
    const acceso = this.biblioteca.login(this.usuario, this.password);

    if (acceso) {
      this.router.navigate(['/inicio'])
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos.'
    }
    
  }
}
