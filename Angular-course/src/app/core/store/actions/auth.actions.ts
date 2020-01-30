import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../interfaces/user.model';

export const AuthAction = createAction(
  '[CoreModule] AuthAction',
  props<{login: string, password: string }>(),
);

export const GetUserInfoAction = createAction(
  '[CoreModule] GetUserInfoAction',
  props(),
);

export const SaveUserInfoAction = createAction(
  '[CoreModule] SaveUserInfoAction',
  props<{userInfo: IUser}>(),
);

export const LoginAction = createAction(
  '[CoreModule] LoginAction',
  props<{token: string }>(),
);

export const LoginFailedAction = createAction(
  '[CoreModule] LoginFailedAction',
  props<{error: HttpErrorResponse }>(),
);

export const LogoutAction = createAction(
  '[CoreModule] LogoutAction',
  props(),
);