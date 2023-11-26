import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientBasicDataResponse } from '../models/patient-data.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  GetUserDependents(): Observable<patientBasicDataResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<patientBasicDataResponse[]>(`${environment.HeadUrl}/patient/dependents`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetUserLogged(): Observable<patientBasicDataResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<patientBasicDataResponse>(`${environment.HeadUrl}/patient/logged`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }
}
