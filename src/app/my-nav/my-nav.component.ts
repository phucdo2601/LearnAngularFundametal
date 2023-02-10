import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  constructor(private authService : AuthService) {
    
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }
  
  public logOut() :void {
    this.authService.logOut();
  }
}
