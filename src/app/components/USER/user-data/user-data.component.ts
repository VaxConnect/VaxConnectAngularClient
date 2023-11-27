import { Component } from '@angular/core';

type UserProfileDTO={
  fullname:string;
  email:string;
  age:number;
  birthdate:string;
  dni:string;
  tlfn:string;
  photoUrl:string;
  notes:string;
}

const USER_EXAMPLE: UserProfileDTO = {
  fullname: 'Cristina Guiterrez Quintero',
  email: 'cristinaculobonito@gmail.com',
  age: 20,
  birthdate: '15-03-2003',
  dni: '54545454A',
  tlfn: '123 45 67 89',
  photoUrl: 'https://afecto.es/wp-content/uploads/2020/05/13AEEE56-248F-471A-94A3-59494C757A4C.jpeg',
  notes:'culo bonito '
}


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  user = USER_EXAMPLE;
}
