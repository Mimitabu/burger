import { AnyAction } from "redux";
import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_FAILED,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED,
    FOGOT_PASS_REQUEST,
    FOGOT_PASS_SUCCESS,
    FOGOT_PASS_FAILED,
    RESET_PASS_REQUEST,
    RESET_PASS_SUCCESS,
    RESET_PASS_FAILED,
    CHANGE_USER_REQUEST,
    CHANGE_USER_SUCCESS,
    CHANGE_USER_FAILED
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

    fogotPassRequest: false,
    hasFogotPassReqSuccess: false,
    hasFogotPassReqFailed: false,

    resetPassRequest: false,
    hasResetPassReqSuccess: false,
    hasResetPassReqFailed: false,

    changeUserRequest: false,
    hasChangeUserReqSuccess: false,
    hasChangeUserReqFailed: false
}

export const regReducer = (state = initialStateUser, action: AnyAction) => {
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
        case GET_USER_FAILED: {
            return {
                ...state,
                getUserRequest: false,
                hasReqRegFailed: true,
                user: {
                    name: '',
                    email: ''
                },
                hasGetUserReqSuccess: false
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
        case FOGOT_PASS_REQUEST: {
            return {
                ...state,
                fogotPassRequest: true,
                hasFogotPassReqSuccess: false,
                hasFogotPassReqFailed: false
            }
        }
        case FOGOT_PASS_SUCCESS: {
            return {
                ...state,
                fogotPassRequest: false,
                hasFogotPassReqSuccess: true,
                hasFogotPassReqFailed: false
            }
        }
        case FOGOT_PASS_FAILED: {
            return {
                ...state,
                fogotPassRequest: false,
                hasFogotPassReqSuccess: false,
                hasFogotPassReqFailed: true
            }
        }
        case RESET_PASS_REQUEST: {
            return {
                ...state,
                resetPassRequest: true,
                hasResetPassReqSuccess: false,
                hasResetPassReqFailed: false
            }
        }
        case RESET_PASS_SUCCESS: {
            return {
                ...state,
                resetPassRequest: false,
                hasResetPassReqSuccess: true,
                hasResetPassReqFailed: false
            }
        }
        case RESET_PASS_FAILED: {
            return {
                ...state,
                resetPassRequest: false,
                hasResetPassReqSuccess: false,
                hasResetPassReqFailed: true
            }
        }
        case CHANGE_USER_REQUEST: {
            return {
                ...state,
                changeUserRequest: true,
                hasChangeUserReqSuccess: false,
                hasChangeUserReqFailed: false
            }
        }
        case CHANGE_USER_SUCCESS: {
            return {
                ...state,
                changeUserRequest: false,
                hasChangeUserReqSuccess: true,
                hasChangeUserReqFailed: false,
                user: action.user
            }
        }
        case CHANGE_USER_FAILED: {
            return {
                ...state,
                changeUserRequest: false,
                hasChangeUserReqSuccess: false,
                hasChangeUserReqFailed: true
            }
        }



        default: {
            return state;
        }
    }
}