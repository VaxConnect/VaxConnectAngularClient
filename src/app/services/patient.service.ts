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
    return this.http.get<UserBasicDataResponse[]>(`${environment.HeadUrl}/patient/dependents`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhODU4ODMzMy02NDg0LTQ1NWUtODdhMC01NTYxN2VhZjkwZGUiLCJpYXQiOjE3MDEwMTkwNDB9.uTTE-SkqjHRZdvtyqikdTCjhPHvrIEe8aB_i9wkFcVJdPXgdhApbsVYdbXtlB8oy7V6NLj6iZyLk45vkggfUew"}`
        }
      });
  }
  GetUser(): Observable<UserBasicDataResponse> {
    return this.http.get<UserBasicDataResponse>(`${environment.HeadUrl}/patient/logged`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhODU4ODMzMy02NDg0LTQ1NWUtODdhMC01NTYxN2VhZjkwZGUiLCJpYXQiOjE3MDEwMTkwNDB9.uTTE-SkqjHRZdvtyqikdTCjhPHvrIEe8aB_i9wkFcVJdPXgdhApbsVYdbXtlB8oy7V6NLj6iZyLk45vkggfUew"}`
        }
      });
  }
}
