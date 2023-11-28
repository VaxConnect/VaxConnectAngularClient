import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientBasicDataResponse } from '../models/patient-data.interface';
import { environment } from '../../environments/environment.development';
import { GetAllPatientsResponse } from '../models/get-all-patients.interface';
import { PatientDetailsResponse } from '../models/patient-details.interface';
import { DependentsByPatientResponse } from '../models/dependents-by-patient.interface';
import { MyProfileResponse } from '../models/my-profile.module';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  GetMyProfilePage(): Observable<MyProfileResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<MyProfileResponse>(`${environment.HeadUrl}/patient/myprofile/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }

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

  GetAll(page: number): Observable<GetAllPatientsResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<GetAllPatientsResponse>(`${environment.HeadUrl}/sanitary/patient?page=${page}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetById(id: string): Observable<PatientDetailsResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<PatientDetailsResponse>(`${environment.HeadUrl}/sanitary/patient/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetDependents(id: string): Observable<DependentsByPatientResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<DependentsByPatientResponse[]>(`${environment.HeadUrl}/sanitary/patient/dependents/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }
}
