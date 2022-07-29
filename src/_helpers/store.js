import { applyMiddleware, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";

import thunkMiddleware from 'redux-thunk';
import { rootReducer } from "../_reducers";

const loggerMiddlweare = createLogger();

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddlweare
    )
);