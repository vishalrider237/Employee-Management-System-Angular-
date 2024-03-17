import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id:number=0

  // @ts-ignore
  employee: Employee=new Employee()
  constructor(private employeeService: EmployeeService,private activatedRoute:ActivatedRoute,private router: Router) {
  }
  FormSubmitted(event:SubmitEvent){
    this.updateEmployee();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.employee = data
        },
        error: (error) => console.log(error),
        complete: () => console.log("Data init completed!")
      })
  }
  updateEmployee(){
    let ans=confirm("Do you want to update?")
    if (ans){
      this.employeeService.updateEmployee(this.id, this.employee)
        .subscribe({
          next: (data) => console.log(data),
          error: (error) => console.log(error),
          complete: () =>
            this.goToEmployeeList()

        })
      this.goToEmployeeList()
      alert("Updated Employee Successfully")
    }


  }

  goToEmployeeList(){
    this.router.navigate(['/employee'])};

}
