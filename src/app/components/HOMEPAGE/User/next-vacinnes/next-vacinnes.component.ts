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
    apellido: 'rebolledo',
    vacunas: [
      {
        id: '1',
        nombre: 'bichitis'
      }
    ],
   
  },
  {
    id: '2',
    nombre: 'Alex',
    apellido: 'rubens',
    vacunas: [
      {
        id: '2',
        nombre: 'gripe'
      }
    ],
   
  },
  {
    id: '3',
    nombre: 'Pedro',
    apellido: 'perez',
    vacunas: [
      {
        id: '3',
        nombre: 'primperan'
      }
    ],
   
  }
];
@Component({
  selector: 'app-next-vacinnes',
  templateUrl: './next-vacinnes.component.html',
  styleUrl: './next-vacinnes.component.css'
})
export class NextVacinnesComponent {
  p = Pacientes;
}
