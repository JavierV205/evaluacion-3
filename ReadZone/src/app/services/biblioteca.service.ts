import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private clave = 'solicitudes';

  login(usuario: string, password: string): boolean {

    if (usuario === 'javier' && password === '@lexSAnder_1234') {

      localStorage.setItem('login', 'true');

      return true;

    }

    return false;

  }

  logout(): void {

    localStorage.removeItem('login');

  }

  guardar(solicitud: Solicitud): void {

    const solicitudes = this.listar();

    solicitudes.push(solicitud);

    localStorage.setItem(this.clave, JSON.stringify(solicitudes));

  }
  isLogged(): boolean {
    return localStorage.getItem('login') === 'true';
  }

  listar(): Solicitud[]{
    const datos = localStorage.getItem(this.clave);
    return datos ? JSON.parse(datos): [];
  }

  eliminar(indice: number): void {
    const solicitud = this.listar();
    solicitud.splice(indice, 1);
    localStorage.setItem(this.clave, JSON.stringify(solicitud));
  }
}

