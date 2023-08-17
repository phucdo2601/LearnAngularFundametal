import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { UserResponeModel } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl: string = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  //Make call to the backend API

  //arrow function
  listUses$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<UserResponeModel>> =>
    this.http.get<any>(`${this.serverUrl}/user/listUser?name=${name}&page=${page}&size=${size}`);

  // basic function
  // getUsers(name: string = '', page: number = 0, size: number = 10): Observable<any> {
  //   return this.http.get<any>(`${this.serverUrl}/user/listUser?name=${name}&page=${page}&size=${size}`);
  // }
}
