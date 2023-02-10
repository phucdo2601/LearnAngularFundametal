import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private authService : AuthService) {
    
  }

  public login(): void {
    console.log(`Login Clicked`);
    this.authService.login("PhucDN");
  }

}
