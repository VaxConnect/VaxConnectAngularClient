import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/get-all-patients.interface';
import { PatientService } from '../../../services/patient.service';
import { NgbModal, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { DependentsByPatientResponse } from '../../../models/dependents-by-patient.interface';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrl: './patients-page.component.css'
})
export class PatientsPageComponent implements OnInit {
  patientList: Patient[] = [];
  pageNumber: number = 0;
  count: number = 0;
  selectedPatient?: Patient;
  dependentsList: DependentsByPatientResponse[] = [];


  constructor(
    private patientService: PatientService,
    config: NgbOffcanvasConfig,
    private offcanvasService: NgbOffcanvas,
    modalService: NgbModal
  ) {
    config.position = 'end';
    config.backdropClass = 'bg-dark';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.patientService.GetAll(this.pageNumber - 1).subscribe(resp => {
      this.patientList = resp.content;
      this.count = resp.totalElements;
    });
  }
  openOffcanvas(patientDetails: any, patient: Patient) {
    this.patientService.GetById(patient.id).subscribe(resp => {
      this.selectedPatient = resp;
      this.offcanvasService.open(patientDetails);

      this.patientService.GetDependents(patient.id).subscribe(resp => {
        this.dependentsList = resp;
        this.isDepentListEmpty();
      });
    });
  }
  isDepentListEmpty() {
    if (this.dependentsList.length <= 1) {
      return true;
    } else {
      return false;
    }
  }

  deletePatient(id: string) {
    this.patientService.deletePatientById(id).subscribe(
      console.log("boorrado");
    );
  }

}
