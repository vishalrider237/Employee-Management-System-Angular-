import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";

const routes: Routes = [
  {
    path:'employee',
    component:EmployeeListComponent
  },
  {
    path:'',
    redirectTo:'employee',
    pathMatch:'full'
  },
  {
    path:'create-employee',
    component:CreateEmployeeComponent
  },
  {
    path:"update-employee/:id",
    component:UpdateEmployeeComponent
  },
  {
    path:"employee-detail/:id",
    component:EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
