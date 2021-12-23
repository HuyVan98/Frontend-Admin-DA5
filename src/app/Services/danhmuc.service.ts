import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {
  private API_URL = 'http://127.0.0.1:8000/api';
  constructor(private readonly http: HttpClient) { }
  GetAll() {
    const url = `${this.API_URL}/danh-muc`;
    return this.http.get(url);
  }
  getByid(id: any): Observable<any> {
    const url = `${this.API_URL}/danh-muc/${id}`;
    return this.http.get<any>(url);
  }
  add(val:any){
    return this.http.post(this.API_URL+'/danh-muc',val);
  }
  update(val:any){
    return this.http.post(this.API_URL+'/sua-danh-muc/'+val.id,val);
  }
  delete(id:any){
    return this.http.delete(this.API_URL+'/danh-muc/'+id);
  }
}