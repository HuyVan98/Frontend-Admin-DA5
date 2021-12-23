import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    private API_URL = 'http://127.0.0.1:8000/api';
    constructor(private readonly http: HttpClient) { }
    statistical() {
        const url = `${this.API_URL}/thong-ke`;
        return this.http.get(url);
    }
}