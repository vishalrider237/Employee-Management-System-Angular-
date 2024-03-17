import { Component } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private employeeService: EmployeeService,private router:Router) {
  }
  // @ts-ignore
  employee: Employee=new Employee()
  FormSubmitted(event:SubmitEvent){
    console.log(this.employee)
    this.saveEmployee()
    alert("Employee Added successfully")
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
        console.log(data)
      this.goToEmployeeList()
    },
      error => console.log(error))
  }
  goToEmployeeList(){
     this.router.navigate(["/employee"])
  }
}
