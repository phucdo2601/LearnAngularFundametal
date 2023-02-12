import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.userLogin?.roles.includes(
      route.data.role
    );
    console.log(this.authService.userLogin);

    console.log(isAuthorized);

    const tokenName = this.authService.getToken();
    console.log(tokenName);

    if (!isAuthorized && tokenName) {
      // redirect
      // display a message
      // window.alert('you are not authorized');
      this.authService.removeToken();
      this.router.navigate(['**']);
    }

    return isAuthorized;
  }
}
