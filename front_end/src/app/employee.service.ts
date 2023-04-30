import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // It is base URL for get all employee details
  emp: Employee = new Employee();
  private baseURL = 'http://localhost:8080/api/employees';
  constructor(private httpClient: HttpClient) {}

  // getEmployeeList(): Observable<Employee[]> {
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  // }

  resultReturn(employee: Employee) {
    employee = this.emp;
  }

  // createEmployee(employee: Employee): Observable<Object> {
  //   return this.httpClient.post(`${this.baseURL}`, employee);
  // }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
