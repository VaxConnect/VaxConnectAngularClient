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
  },
  {
    id: '4',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '4',
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
    id: '5',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '5',
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
    id: '6',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '6',
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
    id: '7',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '7',
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
    id: '8',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '8',
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
    id: '9',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '9',
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
    id: '10',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '10',
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
    id: '11',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '11',
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
    id: '12',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '12',
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
    id: '13',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '13',
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
    id: '14',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '14',
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
    id: '15',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '15',
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
    id: '16',
    nombre: 'Angel',
    apellido: 'repollero',
    vacunas: [
      {
        id: '16',
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
  
];
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent {
  p = Pacientes;
}
