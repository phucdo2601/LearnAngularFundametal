import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    this.checkAuthentication();
  }

  constructor(private authService: AuthService, private router: Router) {}

  loginFunc(loginForm: FormGroup): any {
    if (loginForm.value) {
      this.authService.login(loginForm.value).subscribe(
        (result) => {
          console.log(result);
          if (result.roles === 'Admin') {
            this.router.navigate(['admin']);
          } else if (result.roles === 'User') {
            this.router.navigate(['user']);
          }
        },
        (err: Error) => {
          alert(err);
        }
      );
    }
  }

  checkAuthentication(): any {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginFunc(this.loginForm);
  }
}
