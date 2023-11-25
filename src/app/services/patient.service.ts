import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBasicDataResponse } from '../models/user-dependents.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  GetUserDependents(): Observable<UserBasicDataResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<UserBasicDataResponse[]>(`${environment.HeadUrl}/patient/dependents`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetUserLogged(): Observable<UserBasicDataResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<UserBasicDataResponse>(`${environment.HeadUrl}/patient/logged`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }
}
