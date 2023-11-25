import { Component } from '@angular/core';

type YoungestPatientsDTO= {
  fullname:string;
  age:string;
};

const YOUNEST_PATIENTS : YoungestPatientsDTO [] = [
  {
  fullname: 'Manolo manolo 1',
  age:'25'
  },
  {
  fullname: 'Manolo manolo 1',
  age:'25'
  },
  {
  fullname:'Manolo manolo 1',
  age:'25'
  },
  {
  fullname:'Manolo manolo 1',
  age:'25'
  },
  {
  fullname:'Manolo manolo 1',
  age:'25'
  }
];


@Component({
  selector: 'app-youngest-patients',
  templateUrl: './youngest-patients.component.html',
  styleUrl: './youngest-patients.component.css'
})
export class YoungestPatientsComponent {
  patients = YOUNEST_PATIENTS;
}
