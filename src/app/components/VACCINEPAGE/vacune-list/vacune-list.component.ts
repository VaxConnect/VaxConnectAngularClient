import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Vacune } from '../../../modules/vacune.module';
import { VacuneService } from '../../../services/vacune.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vacune-list',
  templateUrl: './vacune-list.component.html',
  styleUrl: './vacune-list.component.css'
})
export class VacuneListComponent implements OnInit {
  items: Vacune[] = [];
  pageLength: number | undefined;
  page: number = 0;

  constructor(private vacuneService: VacuneService) { }

  ngOnInit(): void {
    this.loadData();
  }

  changePage($event: PageEvent): void {
    console.log($event)
    this.page = $event.pageIndex;
    this.loadData()
  }

  loadData() {
    this.getItems();
  }

  getItems() {
    this.vacuneService.getAllVacine(this.page).subscribe(v => {
      this.items = v.content;
      this.pageLength = v.totalElements;
      this.page = v.pageable.pageNumber;
    })
  }
}
