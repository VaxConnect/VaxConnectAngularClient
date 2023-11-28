import { Component, OnInit } from '@angular/core';
import { ChartResponse } from '../../../models/charts';
import { VacuneService } from '../../../services/vacune.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  
  single: ChartResponse[] = []
  view: [number, number] = [700, 400];
 // options
 showXAxis = true;
 showYAxis = true;
 gradient = false;
 showLegend = true;
 showXAxisLabel = true;
 xAxisLabel = 'Date';
 showYAxisLabel = true;
 yAxisLabel = 'numero';

 colorScheme = {
   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
 };

 onSelect(event: any) {
   console.log(event);
 }
}
