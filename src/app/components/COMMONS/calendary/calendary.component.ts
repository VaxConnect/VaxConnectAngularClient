import { Component } from '@angular/core';
import { type } from 'node:os';
type Vacuna = {
  id: number;
  nombre: string;
  edadess:Edad[],
  
};

type Paciente = {
  id: string;
  nombre: string;
  apellido: string;
  edades1:Edad[]
  vacunas: Vacuna[];

};

type Edad={
  id:number,
  edad:string
}
const Edades: Edad[] = [
  {
    id:1,
    edad:'pre-natal'
  },
  {
    id:2,
    edad:'0'
  },
  {
    id:3,
    edad:'2'
  },
  {
    id:4,
    edad:'4'
  },
  {
    id:5,
    edad:'6'
  },
  {
    id:6,
    edad:'11'
  },
  {
    id:7,
    edad:'12'
  },
  {
    id:8,
    edad:'15'
  },
  {
    id:9,
    edad:'3-4'
  },
  {
    id:10,
    edad:'5'
  },
  {
    id:11,
    edad:'6'
  },
  {
    id:12,
    edad:'12'
  },
  {
    id:13,
    edad:'14'
  },
  {
    id:14,
    edad:'15-18'
  },
  {
    id:15,
    edad:'19-64'
  },
  {
    id:16,
    edad:'65'
  },
]
const Pacientes: Paciente[] = [
  {
    id: '1',
    nombre: 'Angel',
    apellido: 'repollero',
    edades1:[
      {
        id:14,
        edad:'15-18'
      }
    ],
    vacunas: [
      {
        id: 1,
        nombre: 'diabetes',
        
        edadess:[
          {
            id:11,
            edad:'0'
          }
        ],
      },
      {
        id: 2,
        nombre: 'escoliosis',
        
        edadess:[
          {
            id:3,
            edad:'0'
          }
        ],
      },
      {
        id: 3,
        nombre: ' lepra',
        
        edadess:[
          {
            id:6,
            edad:'0'
          }
        ],
      },
    ],
    
  },
  
 
  
];
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent {
  e = Edades;
  p = Pacientes;
  pa!: Paciente[];

  esmayorId(paciente: Paciente) {
    const edadVacuna = parseInt(paciente.vacunas[0].edadess[0].edad, 10);
    const [min, max] = paciente.edades1[0].edad.split('-').map((e) => parseInt(e, 10));

    return !isNaN(edadVacuna) && !isNaN(min) && !isNaN(max) && edadVacuna >= min && edadVacuna <= max;
  }

  esEdadAdministrada(paciente: Paciente, vacuna: Vacuna, edad: Edad) {
    const [min, max] = paciente.edades1[0].edad.split('-').map((e) => parseInt(e, 10));
    return (
      min >= edad.id &&
      max >= edad.id &&
      vacuna.edadess.some((e) => e.id === edad.id)
    );
  }
  getIndexForEdad(edad: Edad): number {
    return this.e.findIndex(e => e.id === edad.id);
  }

  esEdadActual(edad: Edad): boolean {
    return this.p[0].edades1[0].id === edad.id; // Ajusta según tu lógica
  }
}
  
  
  
  
  
  
  


