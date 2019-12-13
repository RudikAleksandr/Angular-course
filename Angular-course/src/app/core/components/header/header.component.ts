import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Routes } from '../../enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public handlerClickLogOffBtn() {
    this.authService.logout();
    this.router.navigateByUrl(Routes.LOGIN);
  }
}
