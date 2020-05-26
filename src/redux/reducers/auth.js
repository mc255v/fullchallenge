import { SET_AUTH_TYPE } from '../actions/type';

const initialAuthState = {
  isAuthenticated: false,
  authType: null,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case SET_AUTH_TYPE:
      return {
        ...state,
        isAuthenticated: true,
        authType: action.authType,
      };
    default:
      return state;
  }
}
