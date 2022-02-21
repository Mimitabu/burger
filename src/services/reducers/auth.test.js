import { initialStateUser } from "./auth";
import { regReducer } from "./auth";
import * as types from '../actions/auth';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(regReducer(undefined, {})).toEqual(initialStateUser)
    })
    it('showld handle user request', () => {
        expect(regReducer(undefined, {
            type: types.REG_USER_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                regUserRequest: true,
                hasReqRegSuccess: false
            }
        )
    })
    it('showld handle user request ok', () => {
        expect(regReducer(undefined, {
            type: types.REG_USER_SUCCESS,
            user: {
                name: 'Vanija',
                emal: 'vanija@email.com'
            }
        })).toEqual(
            {
                ...initialStateUser,
                regUserRequest: false,
                hasReqRegFailed: false,
                hasReqRegSuccess: true,
                user: {
                    name: 'Vanija',
                    emal: 'vanija@email.com'
                }
            }
        )
    })
    it('showld handle user error', () => {
        expect(regReducer(undefined, {
            type: types.REG_USER_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                regUserRequest: false,
                hasReqRegFailed: true,
                hasReqRegSuccess: false
            }
        )
    })
    it('showld handle auth user request', () => {
        expect(regReducer(undefined, {
            type: types.AUTH_USER_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                authUserRequest: true,
                hasReqAuthSuccess: false
            }
        )
    })
    it('showld handle auth user request ok', () => {
        expect(regReducer(undefined, {
            type: types.AUTH_USER_SUCCESS,
            user: {
                name: 'Vanija',
                emal: 'vanija@email.com'
            }
        })).toEqual(
            {
                ...initialStateUser,
                authUserRequest: false,
                hasReqAuthFailed: false,
                hasReqAuthSuccess: true,
                user: {
                    name: 'Vanija',
                    emal: 'vanija@email.com'
                }
            }
        )
    })
    it('showld handle auth user error', () => {
        expect(regReducer(undefined, {
            type: types.AUTH_USER_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                authUserRequest: false,
                hasReqAuthFailed: true,
                hasReqAuthSuccess: false
            }
        )
    })
    it('showld handle get user request', () => {
        expect(regReducer(undefined, {
            type: types.GET_USER_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                getUserRequest: true,
                hasReqRegFailed: false,
                hasGetUserReqSuccess: false
            }
        )
    })
    it('showld handle get user request ok', () => {
        expect(regReducer(undefined, {
            type: types.GET_USER_SUCCESS,
            user: {
                name: 'Vanija',
                emal: 'vanija@email.com'
            }
        })).toEqual(
            {
                ...initialStateUser,
                getUserRequest: false,
                hasReqRegFailed: false,
                hasGetUserReqSuccess: true,
                user: {
                    name: 'Vanija',
                    emal: 'vanija@email.com'
                }
            }
        )
    })
    it('showld handle get user error', () => {
        expect(regReducer(undefined, {
            type: types.GET_USER_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                getUserRequest: false,
                hasReqRegFailed: true,
                user: {
                    name: '',
                    email: ''
                },
                hasGetUserReqSuccess: false
            }
        )
    })
    it('showld handle logout user request', () => {
        expect(regReducer(undefined, {
            type: types.LOGOUT_USER_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                logoutRequest: true,
                hasLogoutSuccess: false
            }
        )
    })
    it('showld handle logout user request ok', () => {
        expect(regReducer(undefined, {
            type: types.LOGOUT_USER_SUCCESS,
            user: {
                name: 'Vanija',
                emal: 'vanija@email.com'
            }
        })).toEqual(
            {
                ...initialStateUser,
                logoutRequest: false,
                hasLogoutSuccess: false,
                hasLogoutFailed: false,
                user: {
                    name: '',
                    email: ''
                }
            }
        )
    })
    it('showld handle logout user error', () => {
        expect(regReducer(undefined, {
            type: types.LOGOUT_USER_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                logoutRequest: false,
                hasLogoutSuccess: false,
                hasLogoutFailed: true
            }
        )
    })
    it('showld handle fogot pass request', () => {
        expect(regReducer(undefined, {
            type: types.FOGOT_PASS_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                fogotPassRequest: true,
                hasFogotPassReqSuccess: false,
                hasFogotPassReqFailed: false
            }
        )
    })
    it('showld handle fogot pass request ok', () => {
        expect(regReducer(undefined, {
            type: types.FOGOT_PASS_SUCCESS
        })).toEqual(
            {
                ...initialStateUser,
                fogotPassRequest: false,
                hasFogotPassReqSuccess: true,
                hasFogotPassReqFailed: false
            }
        )
    })
    it('showld handle fogot pass error', () => {
        expect(regReducer(undefined, {
            type: types.FOGOT_PASS_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                fogotPassRequest: false,
                hasFogotPassReqSuccess: false,
                hasFogotPassReqFailed: true
            }
        )
    })
    it('showld handle reset pass request', () => {
        expect(regReducer(undefined, {
            type: types.RESET_PASS_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                resetPassRequest: true,
                hasResetPassReqSuccess: false,
                hasResetPassReqFailed: false
            }
        )
    })
    it('showld handle reset pass request ok', () => {
        expect(regReducer(undefined, {
            type: types.RESET_PASS_SUCCESS
        })).toEqual(
            {
                ...initialStateUser,
                resetPassRequest: false,
                hasResetPassReqSuccess: true,
                hasResetPassReqFailed: false
            }
        )
    })
    it('showld handle reset pass error', () => {
        expect(regReducer(undefined, {
            type: types.RESET_PASS_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                resetPassRequest: false,
                hasResetPassReqSuccess: false,
                hasResetPassReqFailed: true
            }
        )
    })
    it('showld handle change user request', () => {
        expect(regReducer(undefined, {
            type: types.CHANGE_USER_REQUEST
        })).toEqual(
            {
                ...initialStateUser,
                changeUserRequest: true,
                hasChangeUserReqSuccess: false,
                hasChangeUserReqFailed: false
            }
        )
    })
    it('showld handle change user request ok', () => {
        expect(regReducer(undefined, {
            type: types.CHANGE_USER_SUCCESS,
            user: {
                name: 'Vanija',
                emal: 'vanija@email.com'
            }
        })).toEqual(
            {
                ...initialStateUser,
                changeUserRequest: false,
                hasChangeUserReqSuccess: true,
                hasChangeUserReqFailed: false,
                user: {
                    name: 'Vanija',
                    emal: 'vanija@email.com'
                }
            }
        )
    })
    it('showld handle change user error', () => {
        expect(regReducer(undefined, {
            type: types.CHANGE_USER_FAILED
        })).toEqual(
            {
                ...initialStateUser,
                changeUserRequest: false,
                hasChangeUserReqSuccess: false,
                hasChangeUserReqFailed: true
            }
        )
    })
})