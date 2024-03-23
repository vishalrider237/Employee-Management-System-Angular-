import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private baseURL="https://downtime.cfapps.eu10-004.hana.ondemand.com/angular/spring-boot"
  constructor(private httpclient:HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseURL}/getAll`)
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpclient.post<Object>(`${this.baseURL}/add`,employee)
  }
  getEmployeeById(id:number):Observable<Employee>{
     return this.httpclient.get<Employee>(`${this.baseURL}/get/${id}`)
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/update/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<Object>{
     return this.httpclient.delete(`${this.baseURL}/delete/${id}`)
  }
}
