import { userConstants } from "../_constants/user.constants";

import { userService } from "../_services";
import { alertActions } from "./alert.actions";

/*
    New registeration code
*/
function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success(user));

        dispatch(alertActions.success('Sign up successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user: user };
  }

  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user: user };
  }

  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error: error };
  }
}

/*
    Login code
*/
function login(username, password, navigate) {
  return (dispatch) => {
    dispatch(request());

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        navigate("/banking");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

export const userActions = {
  register,
  login,
};
