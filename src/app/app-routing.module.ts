import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // trang nay vao ma khong can xac thuc
  { path: '', component: LoginComponent },
  //  canActivate:[AuthGuard]: nhung component nay can xac thuc truoc khi vao khi them canActivate:[AuthGuard]
  { path: 'about', component: AboutComponent, canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo:"" },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
