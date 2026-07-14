import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Solicitud } from '../../models/solicitud';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule ,NavbarComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  nombre = '';
  libro = '';
  fecha = '';

  solicitudes: Solicitud[] = [];

  constructor(private biblioteca: BibliotecaService){

    this.solicitudes = this.biblioteca.listar();
  }


guardar() {
  if(this.nombre=='' || this.libro=='' || this.fecha==''){
    alert("Complete todos los campos");
    return;
  }
  const solicitud:Solicitud={
    nombre:this.nombre,
    libro:this.libro,
    fecha:this.fecha

  };

  this.biblioteca.guardar(solicitud);
  this.solicitudes=this.biblioteca.listar();

  this.nombre='';
  this.libro='';
  this.fecha='';
  
  }
}
