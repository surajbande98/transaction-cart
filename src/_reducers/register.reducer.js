import { userConstants } from "../_constants/user.constants";

const initState = {
    registering: false,
    user: null
};

export function register(state=initState, action) {
    switch(action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true};
        case userConstants.REGISTER_SUCCESS:
            return {registering: false};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}