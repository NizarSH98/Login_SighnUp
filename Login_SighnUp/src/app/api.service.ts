import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserDetails {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://example.com/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  registerUser(userDetails:UserDetails): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userDetails);
  }

  loginUser(userCredentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userCredentials);
  }
}
