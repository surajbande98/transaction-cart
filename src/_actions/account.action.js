import { AccountService } from "../HomePage/services/account.service";
import { AccountsConstants } from "../_constants/accounts.constant";
import { alertActions } from "./alert.actions";

function getAll() {
  return (dispatch) => {
    // Show loader
    dispatch(request());

    AccountService.getAccounts()
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      });
  };

  function request() {
    return { type: AccountsConstants.REQUEST_ACCOUNTS };
  }

  function success(list) {
    return { type: AccountsConstants.REQUEST_SUCCESS, accounts: list };
  }

  function failure(error) {
    return { type: AccountsConstants.REQUEST_FAILURE, error: error };
  }
}

export const AccountAction = {
  getAll
};