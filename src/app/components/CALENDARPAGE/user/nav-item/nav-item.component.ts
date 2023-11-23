import { Component, Input } from '@angular/core';
type Pacient = {
  id: string,
  nombre: string,
  notes: string
}
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() patient!: Pacient;
}
