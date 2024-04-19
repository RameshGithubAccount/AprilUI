import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppAdmin } from '../interfaces/app-admin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppAdminService {

  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  // registerUser(AppDetails: AppAdmin) {
  //   return this.http.post(`${this.baseUrl}/users`, userDetails);
  // }

  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  // }
}
