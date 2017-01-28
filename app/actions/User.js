// @flow
import type { userStateType } from '../reducers/User';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
