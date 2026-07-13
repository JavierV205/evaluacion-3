import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private biblioteca: BibliotecaService,
    private router: Router
  ) { }

  salir() {
    this.biblioteca.logout();
    this.router.navigate(['/login']);
  }
}