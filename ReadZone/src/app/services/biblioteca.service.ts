import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  login(usuario: string, password: string): boolean {

  if (usuario === 'javier' && password === '@lexSAnder_1234') {

    localStorage.setItem('login', 'true');

    return true;

  }

  return false;

}

logout() {

  localStorage.removeItem('login');

}

  guardar(solicitudes: Solicitud){
    const datos = this.listar();
    datos.push(solicitudes)
    localStorage.setItem('solicitud',JSON.stringify(datos))

  }
  listar(): Solicitud[]{
    return JSON.parse(localStorage.getItem('Solicitud') || '[]');

  }
}
