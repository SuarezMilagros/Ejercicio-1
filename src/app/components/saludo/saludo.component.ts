import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  nombre: string = 'Milagros';
  @Input() mostrarSaludo: boolean = true;

  color: string = '';
  rojo: boolean = false;
  verde: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  esRojo(){
    this.rojo = !this.rojo;
  }
  esVerde(){
    this.verde = !this.verde;
  }
  
  irADespedida() {
    this.router.navigate(['/despedida', this.nombre]); 
  }
}
