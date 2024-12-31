import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Employee} from "../model/employee";
import { Apollo, gql } from 'apollo-angular';
import { MessageDto } from '../model/message-dto';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
<<<<<<< HEAD
  
  constructor(private apollo: Apollo) {}
  createEmployee(
    name: string,
    email: string,
    phone_no: string,
    address: string
  ): Observable<MessageDto | null> {  // Return MessageDto or null if no data
    const CREATE_EMPLOYEE = gql`
      mutation addEmployee($name: String!, $email: String!, $phone_no: String!, $address: String!) {
        addEmployee(name: $name, email: $email, phone_no: $phone_no, address: $address) {
          message
          code
        }
      }
    `;

    return this.apollo.mutate<{ addEmployee: MessageDto }>({
      mutation: CREATE_EMPLOYEE,
      variables: {
        name,
        email,
        phone_no,
        address
      },
    }).pipe(
      map(result => result.data?.addEmployee || null)  // Handle null or undefined safely
    );
=======
   private baseURL="https://employee-management-system-java.cfapps.us10-001.hana.ondemand.com/angular/spring-boot"
  constructor(private httpclient:HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseURL}/getAll`)
>>>>>>> f697780644cac055aef584a08a735a5cdd7b6f0f
  }
  getAllEmployees(): Observable<Employee[]> {
    const GET_ALL_EMPLOYEES = gql`
      query {
        getAllEmployee {
          id
          name
          email
          phone_no
          address
        }
      }
    `;

    return this.apollo.watchQuery<{ getAllEmployee: Employee[] }>({
      query: GET_ALL_EMPLOYEES
    })
    .valueChanges
    .pipe(
      map(result => result.data?.getAllEmployee || [])  // Extract the array safely
    );
  }
  deleteEmployee(id: number): Observable<MessageDto | null> {
    const DELETE_EMPLOYEE = gql`
      mutation deleteEmployee($id: ID!) {
        deleteEmployee(id: $id) {
          message
          code
        }
      }
    `;

    return this.apollo.mutate<{ deleteEmployee: MessageDto }>({
      mutation: DELETE_EMPLOYEE,
      variables: { id }
    }).pipe(
      map(result => result.data?.deleteEmployee || null)
    );
  }
  getEmployeeById(id: number): Observable<Employee | null> {
    const GET_EMPLOYEE_BY_ID = gql`
      query getEmployeeBasedOnId($id: ID!) {
        getEmployeeBasedOnId(id: $id) {
          id
          name
          email
          phone_no
          address
        }
      }
    `;
  
    return this.apollo.watchQuery<{ getEmployeeBasedOnId: Employee }>({
      query: GET_EMPLOYEE_BY_ID,
      variables: { id }
    })
    .valueChanges
    .pipe(
      map(result => result.data?.getEmployeeBasedOnId || null)
    );
  }
  updateEmployee(
    id: number,
    name: string,
    email: string,
    phone_no: string,
    address: string
  ): Observable<MessageDto | null> {
    const UPDATE_EMPLOYEE = gql`
      mutation updateEmployee(
        $id: ID!,
        $name: String!,
        $email: String!,
        $phone_no: String!,
        $address: String!
      ) {
        updateEmployee(
          id: $id,
          name: $name,
          email: $email,
          phone_no: $phone_no,
          address: $address
        ) {
          message
          code
        }
      }
    `;
  
    return this.apollo.mutate<{ updateEmployee: MessageDto }>({
      mutation: UPDATE_EMPLOYEE,
      variables: {
        id,
        name,
        email,
        phone_no,
        address
      }
    }).pipe(
      map(result => result.data?.updateEmployee || null)
    );
  }
}
