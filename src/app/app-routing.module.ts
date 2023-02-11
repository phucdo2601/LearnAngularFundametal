import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeesAddComponent } from './components/employees/employees-add/employees-add.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', component: EmployeeListComponent },
  {path: 'employees/add', component: EmployeesAddComponent},
  {path: 'employees/edit/:id', component: EmployeeEditComponent}
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
