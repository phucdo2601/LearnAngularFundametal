import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private REST_API_EMPLOYEE_SERVER = "https://localhost:7174/api";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    const url = `${this.REST_API_EMPLOYEE_SERVER}/Employee/getAllEmployees`;
    return this.http.get<any>(url, this.httpOptions);
  }

  addNewEmployee(employee: any): Observable<Employee> {
    const url = `${this.REST_API_EMPLOYEE_SERVER}/Employee/addNewEmployee`;
    return this.http.post<any>(url, employee,this.httpOptions);
  }

  getEmployeeById(id : any): Observable<Employee> {
    const url = `${this.REST_API_EMPLOYEE_SERVER}/Employee/getEmployeeById/${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  updateEmployee(id: any, employee: Employee): Observable<Employee> {
    const url = `${this.REST_API_EMPLOYEE_SERVER}/Employee/updateEmp/${id}`;
    return this.http.put<any>(url, employee,this.httpOptions);
  }

  deleteEmployee(id : any): Observable<string> {
    const url = `${this.REST_API_EMPLOYEE_SERVER}/Employee/deleteEmployee/${id}`;
    return this.http.delete<any>(url,this.httpOptions);
  }
}
