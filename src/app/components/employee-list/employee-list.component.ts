import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];


  constructor(private service:EmployeeService,private  router:Router) {
  }
  ngOnInit(): void {
    this.getEmployee()
  }
  private getEmployee(){
    this.service.getEmployeeList().subscribe((data:Employee[])=>{
        console.log('Fetched employees:', data);
        this.employees=data
    }
      )
  }
  updateEmployee(id:number){
    this.router.navigate(['/update-employee',id]);
}
  deleteTodo(id:number) {
    let ans = confirm("Do you want to delete this employee?")
    if (ans) {
      this.service.deleteEmployee(id).subscribe(data => {
        console.log(data)
        this.getEmployee()
      })
    }
    alert("Employee deleted successfully")
  }
  viewEmployee(id:number){
   this.router.navigate(['/employee-detail',id])
}
}
