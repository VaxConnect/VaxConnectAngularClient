import { Component } from '@angular/core';
import { ChartResponse } from '../../../models/charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
graphic!:ChartResponse
}
