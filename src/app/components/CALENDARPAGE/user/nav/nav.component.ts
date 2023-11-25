import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service';
import { UserBasicDataResponse } from '../../../../models/user-dependents.interface';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  dependentList: UserBasicDataResponse[] = [];
  userLogged!: UserBasicDataResponse;
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
