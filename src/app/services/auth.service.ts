import { User } from './../commons/models/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenName: string | null = '';
  userLogin: User = {
    name: '',
    email: '',
    roles: '',
  };
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token: string | null = localStorage.getItem('token');
    return token;
  }

  isLoggedIn(): any {
    return this.getToken() !== null;
  }

  removeToken(): any {
    localStorage.removeItem('token');
  }

  logout(): any {
    this.removeToken();
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.tokenName = this.getToken();
      this.userLogin = this.getUser(this.tokenName);
      return of({
        name: 'admin-test-name',
        email: 'admin@gmail.com',
        roles: 'Admin',
      });
    } else if (email === 'user@gmail.com' && password === 'User@123') {
      this.setToken('userRole2423433243242');
      this.tokenName = this.getToken();
      this.userLogin = this.getUser(this.tokenName);
      return of({
        name: 'user-test-name',
        email: 'user@gmail.com',
        roles: 'User',
      });
    }

    return throwError(new Error('Failed to login'));
  }

  getUser(token: any): any {
    if (token === 'abcdefghijklmnopqrstuvwxyz') {
      return (this.userLogin = {
        name: 'admin-test-name',
        email: 'admin@gmail.com',
        roles: 'Admin',
      });
    } else if (token === 'userRole2423433243242') {
      return (this.userLogin = {
        name: 'user-test-name',
        email: 'user@gmail.com',
        roles: 'User',
      });
    }
  }
}
