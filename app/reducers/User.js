// @flow
import { LOGIN, LOGOUT } from '../actions/User';

export type userStateType = {
  userToken: string
};

type actionType = {
  type: string
};

const getInitialState = () => ({
  userToken: 'unknown',
});

const userReducer = (state: userStateType = getInitialState(), action: actionType) => {
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
};

export default userReducer;
