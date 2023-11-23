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
  administraciones:Administracion[];
};
type Administracion={
  id:string;
  fecha:string;
  hora:string;
  
}
const Pacientes: Paciente[] = [
  {
    id: '1',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '1',
        nombre: 'guapura'
      }
    ],
    administraciones:[
      {
        id:"1",
        fecha:"1/02/1999",
        hora:"16:00"
        
      }
    ]
  },
  {
    id: '2',
    nombre: 'raul',
    apellido: 'frantch',
    vacunas: [
      {
        id: '2',
        nombre: 'primeran'
      }
    ],
    administraciones:[
      {
        id:"2",
        fecha:"1/02/1999",
        hora:"10:00"
      }
    ]
  },
  {
    id: '3',
    nombre: 'juan',
    apellido: 'martinez',
    vacunas: [
      {
        id: '3',
        nombre: 'gripe a'
      }
    ],
    administraciones:[
      {
        id:"3",
        fecha:"1/02/1999",
        hora:"08:00"
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
