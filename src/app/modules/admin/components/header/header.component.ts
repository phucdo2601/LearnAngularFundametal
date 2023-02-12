import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private authService: AuthService) {}

  logoutFunc() {
    this.authService.logout();
  }
}
