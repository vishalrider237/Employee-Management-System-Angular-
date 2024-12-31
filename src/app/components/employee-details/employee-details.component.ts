import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number=0
  employee:Employee|undefined
  firstName:string|undefined
  constructor(private activatedRoute: ActivatedRoute,private employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    // @ts-ignore
    this.employee=new Employee()
    this.employeeService.getEmployeeById(this.id).subscribe((data)=>{
      this.employee=data|| undefined;
      this.firstName=data?.name.split(" ")[0]
      console.log(data)
    }) 
  }
}
