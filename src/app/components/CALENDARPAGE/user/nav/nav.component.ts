import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service';
import { patientBasicDataResponse } from '../../../../models/patient-data.interface';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  dependentList: patientBasicDataResponse[] = [];
  userLogged!: patientBasicDataResponse;
  active = 1;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.GetUserDependents().subscribe(resp => {
      this.dependentList = resp;
    });
    this.patientService.GetUserLogged().subscribe(resp => {
      this.userLogged = resp;
    })
  }
}
