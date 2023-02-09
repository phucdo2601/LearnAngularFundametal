import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient : HttpClient) { }

  public getComments(): Observable<any> {

    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getRandomUsers(userNumber: number = 1): Observable<any> {

    const url = `${this.REST_API_SERVER_RANDOM_USERS}` +userNumber;
    console.log(url);
    
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postCommentsd(payload: any): Observable<any> {

    const url = `${this.REST_API_SERVER}/comments`;
    console.log(url);
    
    return this.httpClient.post<any>(url, payload,this.httpOptions);
  }

}
