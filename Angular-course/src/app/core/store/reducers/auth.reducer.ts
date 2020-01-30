import { createReducer, on, Action } from '@ngrx/store';
import { LoginAction, SaveUserInfoAction, LogoutAction } from '../actions/auth.actions';

const initialState = {
  token: ''
};

const authReducer = createReducer(initialState,
  on(LoginAction, (state, props) => {
    return {
      ...state,
      token: props.token
    };
  }),
  on(SaveUserInfoAction, (state, props) => {
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
