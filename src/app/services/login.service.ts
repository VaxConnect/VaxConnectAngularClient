import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../modules/login.module';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LoginResponse(mail: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.HeadUrl}/auth/login`,
      {
        "mail": `${mail}`,
        "password": `${password}`
      }
    );
  }
}
