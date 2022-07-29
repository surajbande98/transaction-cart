import { userConstants } from '../_constants/user.constants';

const initialState = {
    loggingIn: false,
    user: null
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false
      };
    case userConstants.LOGOUT:
        return {
        
          };
    default:
      return state
  }
}