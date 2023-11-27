import { Component } from '@angular/core';
import { DependientListResponde } from '../../../models/dependient-dtoresponses.module';


const DEPENDIENT_ARR: DependientListResponde = {
  dependients: [
    {
      fullname: 'Manolo manolo',
      email: 'manolo@manolo.manolo',
      dni: '12345678A',
      birthDate: '10-10-2010',
      phone: '123456789',
      photourl: 'https://s3.animalia.bio/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp'
    },
    {
      fullname: 'Manolo manolo',
      email: 'manolo@manolo.manolo',
      dni: '12345678A',
      birthDate: '10-10-2010',
      phone: '123456789',
      photourl: 'https://s3.animalia.bio/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp'
    },
    {
      fullname: 'Manolo manolo',
      email: 'manolo@manolo.manolo',
      dni: '12345678A',
      birthDate: '10-10-2010',
      phone: '123456789',
      photourl: 'https://s3.animalia.bio/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp'
    },
    {
      fullname: 'Manolo manolo',
      email: 'manolo@manolo.manolo',
      dni: '12345678A',
      birthDate: '10-10-2010',
      phone: '123456789',
      photourl: 'https://s3.animalia.bio/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp'
    }
  ]
}

@Component({
  selector: 'app-page-myprofile',
  templateUrl: './page-myprofile.component.html',
  styleUrl: './page-myprofile.component.css'
})
export class PageMyprofileComponent {
  list = DEPENDIENT_ARR.dependients;
}
