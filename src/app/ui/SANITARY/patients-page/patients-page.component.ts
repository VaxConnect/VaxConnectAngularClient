import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/get-all-patients.interface';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrl: './patients-page.component.css'
})
export class PatientsPageComponent implements OnInit {
  patientList: Patient[] = [];
  pageNumber: number = 0;
  count: number = 0;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.patientService.GetAll(this.pageNumber - 1).subscribe(resp => {
      this.patientList = resp.content;
      this.count = resp.totalElements;
    });
  }

}
