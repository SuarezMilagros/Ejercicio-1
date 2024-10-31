import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  nombre: string = 'Milagros';
  @Input() mostrarSaludo: boolean = true;
}
