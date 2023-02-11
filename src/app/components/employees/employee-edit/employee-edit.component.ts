import { EmployeesService } from 'src/app/services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

 id : any = "";

 addEmpRequest: any = {
  id: '',
  name: '',
  email: '',
  phone: 0,
  salary: 0,
  department: '',
};

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      {
        next: (params) => {
          this.id = params.get("id");
          if (this.id) {
            this.getEmployeeById(this.id);
          }
        }
      }
    );
  }

  constructor(private activateRoute : ActivatedRoute, private empService : EmployeesService, private router: Router) {
    
    
  }


  getEmployeeById(id : any) {
    this.empService.getEmployeeById(id).subscribe({
      next : (emp) => {
        console.log(emp);
        this.addEmpRequest = emp;
        
      }
    });
  }

  updateEmployee() {
    this.empService.updateEmployee(this.id, this.addEmpRequest).subscribe({
      next: (response) => {
        if (response !== null) {
          this.router.navigate(['/employees']);
        }
      } 
    });
  }

  deleteEmployee(employeeId: string) {
    this.empService.deleteEmployee(this.id).subscribe({
      next: (response) => {
        if (response !== null) {
          this.router.navigate(['/employees']);
        }
      } 
    });
  }
}
