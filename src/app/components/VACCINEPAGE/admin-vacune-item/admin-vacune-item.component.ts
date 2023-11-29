import { Component, Input } from '@angular/core';
import { Vacune } from '../../../models/vacune.module';

@Component({
  selector: 'app-admin-vacune-item',
  templateUrl: './admin-vacune-item.component.html',
  styleUrl: './admin-vacune-item.component.css'
})
export class AdminVacuneItemComponent {
  @Input() vacune: Vacune | undefined;
}
