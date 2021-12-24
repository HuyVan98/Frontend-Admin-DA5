import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = 'http://127.0.0.1:8000/api';
  constructor(private readonly http: HttpClient) { }
  login(val:any){
    return this.http.post(this.API_URL+'/loginApi',val);
  }
}