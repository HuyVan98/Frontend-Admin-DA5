import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private API_URL = 'http://127.0.0.1:8000/api';
    constructor(private readonly http: HttpClient) { }
    GetAll() {
        const url = `${this.API_URL}/hoa-don`;
        return this.http.get(url);
    }
    getByid(id: any): Observable<any> {
        const url = `${this.API_URL}/changestatus/${id}`;
        return this.http.get<any>(url);
    }
    showOrderByid(id: any): Observable<any> {
        const url = `${this.API_URL}/show-order/${id}`;
        return this.http.get<any>(url);
    }
}