import { createReducer, on, Action } from '@ngrx/store';
import { LoginRequest, StoreUserInfo, LogoutAction } from '../actions/auth.actions';

const initialState = {
  token: ''
};

const authReducer = createReducer(initialState,
  on(LoginRequest, (state, props) => {
    return {
      ...state,
      token: props.token
    };
  }),
  on(StoreUserInfo, (state, props) => {
    return {
      ...state,
      userInfo: props.userInfo
    };
  }),
  on(LogoutAction, (state) => {
    return {
      ...state,
      token: ''
    };
  })
);

export function AuthReducer(state, action: Action) {
  return authReducer(state, action);
}
