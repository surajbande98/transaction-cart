import { AccountsConstants } from "../_constants/accounts.constant";

const initState = {
  loading: false,
  accounts: [],
};

export function AccountReducer(state = initState, action) {
  switch (action.type) {
    case AccountsConstants.REQUEST_ACCOUNTS:
      return {
        ...state,
        loading: true,
      };
    case AccountsConstants.REQUEST_SUCCESS:
      return {
        accounts: action.accounts,
        loading: false,
      };

    case AccountsConstants.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}