import { Component } from '@angular/core';

type Pacient = {
  id: string,
  nombre: string,
  notes: string
}


const Pacients: Pacient[] = [
  {
    id: '1',
    nombre: "hola",
    notes: "aaaaa"
  },
  {
    id: '2',
    nombre: "hola2",
    notes: "bbbbb"
  }

]

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  pacients = Pacients;

  active = 1;
}
