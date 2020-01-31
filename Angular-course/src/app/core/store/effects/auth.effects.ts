import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthRequest, LoginRequest, LoginFailed, LoadUserInfoRequest, StoreUserInfo } from '../actions/auth.actions';
import { AuthService } from '../../../core/services/auth/auth.service';
import { switchMap, map, finalize, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IToken } from '../../interfaces/token.model';
import { LoadingService } from '../../services/loading/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Routes } from '../../enums/routes.enum';
import { IUser } from '../../interfaces/user.model';

@Injectable()
export class AuthEffects {
  auth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthRequest),
    switchMap((props) => {
      return this.authService.login(props.login, props.password).pipe(
        map((data: IToken) => {
          this.router.navigateByUrl(Routes.COURSES);
          return LoginRequest({ token: data.token });
        }),
        finalize(() => this.loadingService.setLoading(false)),
        catchError((error: HttpErrorResponse) => {
          return of(LoginFailed({ error }));
        })
      );
    })
  ));

  userInfo$ = createEffect(() => this.actions$.pipe(
    ofType(LoadUserInfoRequest),
    switchMap(() => {
      return this.authService.getUserInfo().pipe(
        map((userInfo: IUser) => {
          return StoreUserInfo({ userInfo });
        }),
        finalize(() => this.loadingService.setLoading(false))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

}
