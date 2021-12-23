import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  private API_URL = 'http://127.0.0.1:8000/api';
  readonly PhotoUrl = "http://127.0.0.1:8000/api/Photos";
  constructor(private readonly http: HttpClient) { }
  GetAll() {
    const url = `${this.API_URL}/san-pham`;
    return this.http.get(url);
  }
   getByid(id: any): Observable<any> {
    const url = `${this.API_URL}/san-pham/${id}`;
    return this.http.get<any>(url);
  }
  getAllLoaisp():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'/danh-muc');
  }
   UploadPhoto(val:any){
    return this.http.post(this.API_URL+'/SaveFile',val);
  }
   add(val:any){
    return this.http.post(this.API_URL+'/san-pham',val);
  }
   delete(val:any){
    return this.http.delete(this.API_URL+'/san-pham/'+val);
  }
  update(val:any){
    return this.http.post(this.API_URL+'/sua-san-pham/'+val.id,val);
  }
}