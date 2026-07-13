import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private clave = 'solicitudes';

  login(usuario: string, contraseña: string): boolean {

    if (usuario === 'javier' && contraseña === '@lexSAnder_1234') {
      localStorage.setItem('login', 'true');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('login');
  }

  isLogged() {
    return localStorage.getItem('login') === 'true';
  }

  guardar(solicitud: Solicitud) {

    const datos = this.listar();

    datos.push(solicitud);

    localStorage.setItem(this.clave, JSON.stringify(datos));

  }

  listar(): Solicitud[] {

    return JSON.parse(localStorage.getItem(this.clave) || '[]');

  }

}