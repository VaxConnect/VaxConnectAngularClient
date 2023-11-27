import { Component, OnInit } from '@angular/core';
import { Vacune } from '../../../modules/vacune.module';
import { VacuneService } from '../../../services/vacune.service';

@Component({
  selector: 'app-vacune-list',
  templateUrl: './vacune-list.component.html',
  styleUrl: './vacune-list.component.css'
})
export class VacuneListComponent implements OnInit {
  items: Vacune[] = [];
  pageSize!: number;
  page!: number;
  collectionSize!: number;

  constructor(private vacuneService: VacuneService) { }
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.vacuneService.getAllVacine().subscribe(v => {
      this.items = v.content;
      this.pageSize = v.size;
      this.page = v.totalElements;
      this.collectionSize = v.totalElements;
    })
  }
}
