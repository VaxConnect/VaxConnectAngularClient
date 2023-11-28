import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacuneResponse } from '../modules/vacune.module';
import { environment } from '../../environments/environment.development';
import { ChartResponse } from '../models/charts';

@Injectable({
  providedIn: 'root'
})
export class VacuneService {

  constructor(private http: HttpClient) { }

  getAllVacine(page: number): Observable<VacuneResponse> {
    return this.http.get<VacuneResponse>(`${environment.HeadUrl}/vacune/all?page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }



  getSearchVacineByName(page: number, search: string): Observable<VacuneResponse> {
    return this.http.get<VacuneResponse>(`${environment.HeadUrl}/vacune/search/${search}?page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }
  GetGraphicOfVaccinesMoreAdministrated():Observable<ChartResponse>{
    
    return this.http.get<ChartResponse>(`${environment.HeadUrl}/sanitary/grafic`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
      }
    });
  }
}
