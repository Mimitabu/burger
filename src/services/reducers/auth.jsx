import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_FAILED,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED
} from "../actions/auth";

const initialStateUser = {
    user: {
        name: '',
        email: ''
    },
    regUserRequest: false,
    hasReqRegSuccess: false,
    hasReqRegFailed: false,
    authUserRequest: false,
    hasReqAuthFailed: false,
    hasReqAuthSuccess: false,
    getUserRequest: false,
    hasGetUserReqFailed: false,
    hasGetUserReqSuccess: false,
    logoutRequest: false,
    hasLogoutSuccess: false,
    hasLogoutFailed: false,
}

export const regReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case REG_USER_REQUEST: {
            return {
                ...state,
                regUserRequest: true,
                hasReqRegSuccess: false
            }
        }
        case REG_USER_SUCCESS: {
            return {
                ...state,
                regUserRequest: false,
                hasReqRegFailed: false,
                hasReqRegSuccess: true,
                user: action.user
            }
        }
        case REG_USER_FAILED: {
            return {
                ...state,
                regUserRequest: false,
                hasReqRegFailed: true,
                hasReqRegSuccess: false
            }
        }
        case AUTH_USER_REQUEST: {
            return {
                ...state,
                authUserRequest: true,
                hasReqAuthSuccess: false
            }
        }
        case AUTH_USER_SUCCESS: {
            return {
                ...state,
                authUserRequest: false,
                hasReqAuthFailed: false,
                hasReqAuthSuccess: true,
                user: action.user
            }
        }
        case AUTH_USER_FAILED: {
            return {
                ...state,
                authUserRequest: false,
                hasReqAuthFailed: true,
                hasReqAuthSuccess: false
            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                hasReqRegFailed: false,
                hasGetUserReqSuccess: false
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserRequest: false,
                hasReqRegFailed: false,
                user: action.user,
                hasGetUserReqSuccess: true
            }
        }
        case LOGOUT_USER_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                hasLogoutSuccess: false
            }
        }
        case LOGOUT_USER_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                hasLogoutSuccess: false,
                hasLogoutFailed: false,
                user: {
                    name: '',
                    email: ''
                }
            }
        }
        case LOGOUT_USER_FAILED: {
            return {
                ...state,
                logoutRequest: false,
                hasLogoutSuccess: false,
                hasLogoutFailed: true
            }
        }



        default: {
            return state;
        }
    }
}