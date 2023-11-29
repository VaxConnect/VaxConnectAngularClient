import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacuneResponse } from '../models/vacune.module';
import { environment } from '../../environments/environment.development';

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

  newVacune(name: string, description: string) {
    return this.http.post(`${environment.HeadUrl}/vacune/new`,
      {
        name: `${name}`,
        description: `${description}`
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
  }
}
