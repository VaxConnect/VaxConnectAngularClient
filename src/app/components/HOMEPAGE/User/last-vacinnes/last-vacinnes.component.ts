import { Component } from '@angular/core';

type Vacuna = {
  id: string;
  nombre: string;
};

type Paciente = {
  id: string;
  nombre: string;
  apellido: string;
  vacunas: Vacuna[];
};

const Pacientes: Paciente[] = [
  {
    id: '1',
    nombre: 'rober',
    apellido: 'repollero',
    vacunas: [
      {
        id: '1',
        nombre: 'bichopedia'
      }
    ]
  },
  {
    id: '2',
    nombre: 'pedro',
    apellido: 'frantch',
    vacunas: [
      {
        id: '2',
        nombre: 'Alopecia'
      }
    ]
  },
  {
    id: '3',
    nombre: 'alex',
    apellido: 'rubens',
    vacunas: [
      {
        id: '3',
        nombre: 'homosexsualidad'
      }
    ]
  }
];


@Component({
  selector: 'app-last-vacinnes',
  templateUrl: './last-vacinnes.component.html',
  styleUrl: './last-vacinnes.component.css'
})
export class LastVacinnesComponent {
p = Pacientes;
}
