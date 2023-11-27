import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacuneResponse } from '../modules/vacune.module';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VacuneService {

  constructor(private http: HttpClient) { }

  getAllVacine(): Observable<VacuneResponse> {
    return this.http.get<VacuneResponse>(`${environment.HeadUrl}vacune/all`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }
}
