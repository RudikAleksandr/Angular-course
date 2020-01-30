import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthAction, LoginAction, LoginFailedAction, GetUserInfoAction, SaveUserInfoAction } from '../actions/auth.actions';
import { AuthService } from '../../../core/services/auth/auth.service';
import { switchMap, map, finalize, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IToken } from '../../interfaces/token.model';
import { LoadingService } from '../../services/loading/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Routes } from '../../enums/routes.enum';
import { IUser } from '../../interfaces/user.model';

@Injectable()
export class AuthEffects {
  @Effect()
  auth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthAction),
    switchMap((props) => {
      return this.authService.login(props.login, props.password).pipe(
        map((data: IToken) => {
          this.router.navigateByUrl(Routes.COURSES);
          return LoginAction({ token: data.token });
        }),
        finalize(() => this.loadingService.setLoading(false)),
        catchError((error: HttpErrorResponse) => {
          return of(LoginFailedAction({ error }));
        })
      );
    })
  ), { dispatch: false });

  @Effect()
  userInfo$ = createEffect(() => this.actions$.pipe(
    ofType(GetUserInfoAction),
    switchMap((props) => {
      return this.authService.getUserInfo().pipe(
        map((userInfo: IUser) => {
          return SaveUserInfoAction({ userInfo });
        }),
        finalize(() => this.loadingService.setLoading(false))
      );
    })
  ), { dispatch: false });

  // @Effect()
  // logout$ = this.actions$.pipe(
  //   ofType(AUTH_ACTIONS.LOGOUT),
  //   map(() => new FinalAction()),
  //   tap(() => this.router.navigate(['auth'])),
  // );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private loadingService: LoadingService,
    private store: Store<IToken>,
    private router: Router
  ) { }

}
