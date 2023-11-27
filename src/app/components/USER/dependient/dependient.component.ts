import { Component, Input } from '@angular/core';
import { Dependient } from '../../../models/dependient-dtoresponses.module';


@Component({
  selector: 'app-dependient',
  templateUrl: './dependient.component.html',
  styleUrl: './dependient.component.css'
})
export class DependientComponent {
  @Input() dependient !: Dependient;
}
