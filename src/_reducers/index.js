import { combineReducers } from "redux";

import {register} from './register.reducer';

import {authentication} from './auth.reducer';

import {alertReducer} from './alert.reducer';

import {AccountReducer} from './account.reducer';

export const rootReducer = combineReducers({
    registeration: register,
    authentication,
    alertReducer,
    AccountReducer
});