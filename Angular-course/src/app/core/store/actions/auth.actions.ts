import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../interfaces/user.model';

export const AuthRequest = createAction(
  '[CoreModule] AuthRequest',
  props<{login: string, password: string }>(),
);

export const LoadUserInfoRequest = createAction(
  '[CoreModule] LoadUserInfoRequest',
  props(),
);

export const StoreUserInfo = createAction(
  '[CoreModule] StoreUserInfo',
  props<{userInfo: IUser}>(),
);

export const LoginRequest = createAction(
  '[CoreModule] LoginRequest',
  props<{token: string }>(),
);

export const LoginFailed = createAction(
  '[CoreModule] LoginFailed',
  props<{error: HttpErrorResponse }>(),
);

export const LogoutAction = createAction(
  '[CoreModule] LogoutAction',
  props(),
);