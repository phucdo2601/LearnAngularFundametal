import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css'],
})
export class EmployeesAddComponent implements OnInit {
  constructor(private employeeService : EmployeesService, private router : Router) {}

  addEmpRequest: any = {
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  ngOnInit(): void {}

  addEmployeeFunc() {
    console.log(this.addEmpRequest);
    this.employeeService.addNewEmployee(this.addEmpRequest)
      .subscribe({
        next: (employee) => {
          if(employee) {
            this.router.navigate(['employees']);
          }
        }
      })

  }
}
