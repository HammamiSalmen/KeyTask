import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { LoginRequest } from './login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';

const API_URL = "http://localhost:8081/api/doLogin"

@Injectable({
  providedIn: 'root'
})
export class IntegrationService { 

  constructor(private http: HttpClient) { }
    doLogin(request: LoginRequest):Observable<LoginResponse> {
      return this.http.post<LoginResponse>(API_URL, request);
    }
}
