// @flow
import { LOGIN, LOGOUT } from '../actions/User';

export type userStateType = {
  userToken: string
};

type actionType = {
  type: string
};

export default function userReducer(state: userStateType = { userToken: 'unknown' }, action: actionType) {
  switch (action.type) {
    case LOGIN: {
      const newState = {
        ...state,
        userToken: 'logged in',
      };
      return newState;
    }
    case LOGOUT: {
      const newState = {
        ...state,
        userToken: 'logged out',
      };
      return newState;
    }
    default: {
      const newState = { ...state };
      return newState;
    }
  }
}
