import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  isLoading: boolean = false;

  constructor(private router: Router) {}

  loginFunc() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);

    this.isLoading = true;
  }
}
