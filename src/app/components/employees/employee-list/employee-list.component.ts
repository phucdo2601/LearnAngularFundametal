import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  // listEmployees: Employee[] = [
  //   {
  //     id: '45645765464-dsfds3-453531',
  //     name: 'Do Ngoc Phuc',
  //     email: 'ngocphucdo2601@gmail.com',
  //     phone: 123131,
  //     salary: 435435,
  //     department: 'Software Engineering',
  //   },
  //   {
  //     id: '45645765464-dsfds3-453532',
  //     name: 'test-employee-name-01',
  //     email: 'testEmp01@gmail.com',
  //     phone: 123131,
  //     salary: 435435,
  //     department: 'Information Technology',
  //   },
  //   {
  //     id: '45645765464-dsfds3-453533',
  //     name: 'test-employee-name-02',
  //     email: 'testEmp02@gmail.com',
  //     phone: 123131,
  //     salary: 435435,
  //     department: 'Software Engineering',
  //   },
  //   {
  //     id: '45645765464-dsfds3-453534',
  //     name: 'test-employee-name-03',
  //     email: 'testEmp03@gmail.com',
  //     phone: 123131,
  //     salary: 435435,
  //     department: 'Human Resources',
  //   },
  //   {
  //     id: '45645765464-dsfds3-453535',
  //     name: 'John Smith',
  //     email: 'testEmp4@gmail.com',
  //     phone: 123131,
  //     salary: 435435,
  //     department: 'Accountant',
  //   },
  // ];

  listEmployees: Employee[] = [];

  public getAllEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (employees) =>{
          console.log(employees);
          this.listEmployees = employees;
          
        },
        error: (err) =>{
          console.log(err);
          
        }

      })

  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  constructor(private employeeService : EmployeesService) {

  }

  
}
