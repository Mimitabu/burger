import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_FAILED
} from "../actions/auth";

const initialStateUser = {
    isLoading: false,
    hasReqRegFailed: false
}

export const regReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case REG_USER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case REG_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasReqRegFailed: false
            }
        }
        case REG_USER_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasReqRegFailed: true
            }
        }
        default: {
            return state;
        }
    }
}