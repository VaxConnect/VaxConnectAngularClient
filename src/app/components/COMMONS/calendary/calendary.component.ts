import { Component } from '@angular/core';
import { type } from 'node:os';
type AdministratedPAtientDataDTO = {
  id: string;
  fullname: string;
  age: string;
  vaccinesImplemented: VaccineImplemented[];
  vaccinesNonImplemented: VaccineNonImplemented[];

}


const VACCINESNONIMPLEMENTED: VaccineNonImplemented[] = [

  {
    idMomentcalendar: '1',
    name: 'Neumococo',
    age: '36-48'
  },
  {
    idMomentcalendar: '2',
    name: 'Neumococo',
    age: '168'
  }
]

const VACCINESIMPLEMENTED: VaccineImplemented[] = [
  {
    idAdministration: '1',
    name: 'difteria',
    age: '6'
  },
  {
    idAdministration: '2',
    name: 'difteria',
    age: '15'
  }
]
const PATIENT: AdministratedPAtientDataDTO = {
  id: '1',
  fullname: 'Manolo manolo manolez',
  age: '23',
  vaccinesImplemented: VACCINESIMPLEMENTED,
  vaccinesNonImplemented: VACCINESNONIMPLEMENTED,

}
type Vaccine = {
  name: string;
}

type VaccineImplemented = {
  idAdministration: string;
  name: string;
  age: string;
}
type VaccineNonImplemented = {
  idMomentcalendar: string;
  name: string;
  age: string;
}


type Edad = {
  id: number,
  edad: string,
  month: string;
}
const Edades: Edad[] = [
  {
    id: 1,
    edad: 'pre-natal',
    month: '-1'
  },
  {
    id: 2,
    edad: '0',
    month: '0'
  },
  {
    id: 3,
    edad: '2',
    month: '2'
  },
  {
    id: 4,
    edad: '4',
    month: '4'
  },
  {
    id: 5,
    edad: '6',
    month: '6'
  },
  {
    id: 6,
    edad: '11',
    month: '11'
  },
  {
    id: 7,
    edad: '12',
    month: '12'
  },
  {
    id: 8,
    edad: '15',
    month: '15'
  },
  {
    id: 9,
    edad: '3-4',
    month: '36-48'
  },
  {
    id: 10,
    edad: '5',
    month: '60'
  },
  {
    id: 11,
    edad: '6',
    month: '72'
  },
  {
    id: 12,
    edad: '12',
    month: '144'
  },
  {
    id: 13,
    edad: '14',
    month: '168'
  },
  {
    id: 14,
    edad: '15-18',
    month: '180-216'
  },
  {
    id: 15,
    edad: '19-64',
    month: '228-768'
  },
  {
    id: 16,
    edad: '65',
    month: '780'
  },
]
  ;
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent {
  e = Edades;
  p = PATIENT;

  isAdministred(paciente: AdministratedPAtientDataDTO, vacuna: VaccineImplemented, edad: Edad) {
    const [min, max] = edad.month.split('-').map((e) => parseInt(e, 10));
    if (min >= parseInt(paciente.age) &&
      max >= parseInt(paciente.age)) {
      return true;
    } else {
      return false;
    }
  }

  isNotAdministred(patient: AdministratedPAtientDataDTO, edad: Edad) {
    var boo: Boolean = false;
    patient.vaccinesNonImplemented.forEach(vaccine => {
      if (vaccine.age == edad.month) {
        boo = true;
      }
    })
    return boo;
  }

  esEdadActual(edad: Edad): boolean {
    return this.p.age === edad.month;
  }
}









