import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Routes } from '../../enums/routes.enum';
import { IUser } from '../../interfaces/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userInfo: IUser;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(this.handlerUserInfo.bind(this));
  }

  private handlerUserInfo(userInfo: IUser): void {
    this.userInfo = userInfo;
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public handlerClickLogOffBtn() {
    this.authService.logout();
    this.router.navigateByUrl(Routes.LOGIN);
  }
}
