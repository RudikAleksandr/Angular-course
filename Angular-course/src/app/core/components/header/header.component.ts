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
    if (this.isAuth()) {
      this.loadUserInfo();
    } else {
      this.authService.getAuthUserEmitter().subscribe(this.loadUserInfo.bind(this));
    }
  }

  private loadUserInfo(): void {
    this.authService.getUserInfo().subscribe((userInfo: IUser) => {
      this.userInfo = userInfo;
    });
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public handlerClickLogOffBtn() {
    this.authService.logout();
    this.router.navigateByUrl(Routes.LOGIN);
  }
}
