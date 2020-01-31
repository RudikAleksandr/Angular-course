import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Routes } from '../../enums/routes.enum';
import { IUser } from '../../interfaces/user.model';
import { LoadUserInfoRequest, LogoutAction } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userInfo: IUser;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select(state => state.auth.token).subscribe((token: string) => {
      if (token) {
        this.store.dispatch(LoadUserInfoRequest({}));
      } else {
        this.userInfo = null;
      }
    });

    this.store.select(state => state.auth.userInfo).subscribe((userInfo: IUser) => {
      this.userInfo = userInfo;
    });
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public handlerClickLogOffBtn() {
    this.store.dispatch(LogoutAction({}));
    this.router.navigateByUrl(Routes.LOGIN);
  }
}
