import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
type Vaccine = {
  id: string,
  nombre: string,
  description: string
}


const Vaccine: Vaccine =
{
  id: '1',
  nombre: "hola",
  description: "aaaaa"
}


@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent {
  vaccine = Vaccine;
  selectedVaccine!: Vaccine;

  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
    config.position = 'end';
    config.backdropClass = 'bg-dark';
    config.keyboard = false;
  }

  openModal(vaccineDetails: any) {
    this.selectedVaccine = Vaccine;
    this.offcanvasService.open(vaccineDetails);
  }
}
