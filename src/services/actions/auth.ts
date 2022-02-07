import { AppDispatch, AppThunk } from '../../utils';
import { IUser } from '../../utils/ts-types';
import { URL } from '../../utils/url';

export const REG_USER_REQUEST: 'REG_USER_REQUEST' = 'REG_USER_REQUEST';
export const REG_USER_SUCCESS: 'REG_USER_SUCCESS' = 'REG_USER_SUCCESS';
export const REG_USER_FAILED: 'REG_USER_FAILED' = 'REG_USER_FAILED';

export const AUTH_USER_REQUEST: 'AUTH_USER_REQUEST' = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS: 'AUTH_USER_SUCCESS' = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILED: 'AUTH_USER_FAILED' = 'AUTH_USER_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const LOGOUT_USER_REQUEST: 'LOGOUT_USER_REQUEST' = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS' = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED: 'LOGOUT_USER_FAILED' = 'LOGOUT_USER_FAILED';

export const FOGOT_PASS_REQUEST: 'FOGOT_PASS_REQUEST' = 'FOGOT_PASS_REQUEST';
export const FOGOT_PASS_SUCCESS: 'FOGOT_PASS_SUCCESS' = 'FOGOT_PASS_SUCCESS';
export const FOGOT_PASS_FAILED: 'FOGOT_PASS_FAILED' = 'FOGOT_PASS_FAILED';

export const RESET_PASS_REQUEST: 'RESET_PASS_REQUEST' = 'RESET_PASS_REQUEST';
export const RESET_PASS_SUCCESS: 'RESET_PASS_SUCCESS' = 'RESET_PASS_SUCCESS';
export const RESET_PASS_FAILED: 'RESET_PASS_FAILED' = 'RESET_PASS_FAILED';

export const CHANGE_USER_REQUEST: 'CHANGE_USER_REQUEST' = 'CHANGE_USER_REQUEST';
export const CHANGE_USER_SUCCESS: 'CHANGE_USER_SUCCESS' = 'CHANGE_USER_SUCCESS';
export const CHANGE_USER_FAILED: 'CHANGE_USER_FAILED' = 'CHANGE_USER_FAILED';


export interface IRegUserRequestAction {
    readonly type: typeof REG_USER_REQUEST;
}

export interface IRegUserSuccsessAction {
    readonly type: typeof REG_USER_SUCCESS;
    readonly user: IUser;
}

export interface IRegUserFailedAction {
    readonly type: typeof REG_USER_FAILED;
}

export interface IAuthUserRequestAction {
    readonly type: typeof AUTH_USER_REQUEST;
}

export interface IAuthUserSuccsessAction {
    readonly type: typeof AUTH_USER_SUCCESS;
    readonly user: IUser;
}

export interface IAuthUserFailedAction {
    readonly type: typeof AUTH_USER_FAILED;
}

export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccsessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: IUser;
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
}

export interface ILogoutUserRequestAction {
    readonly type: typeof LOGOUT_USER_REQUEST;
}

export interface ILogoutUserSuccsessAction {
    readonly type: typeof LOGOUT_USER_SUCCESS;
}

export interface ILogoutUserFailedAction {
    readonly type: typeof LOGOUT_USER_FAILED;
}

export interface IFogotPassRequestAction {
    readonly type: typeof FOGOT_PASS_REQUEST;
}

export interface IFogotPassSuccsessAction {
    readonly type: typeof FOGOT_PASS_SUCCESS;
}

export interface IFogotPassFailedAction {
    readonly type: typeof FOGOT_PASS_FAILED;
}

export interface IResetPassRequestAction {
    readonly type: typeof RESET_PASS_REQUEST;
}

export interface IResetPassSuccsessAction {
    readonly type: typeof RESET_PASS_SUCCESS;
}

export interface IResetPassFailedAction {
    readonly type: typeof RESET_PASS_FAILED;
}

export interface IChangeUserRequestAction {
    readonly type: typeof CHANGE_USER_REQUEST;
}

export interface IChangeUserSuccsessAction {
    readonly type: typeof CHANGE_USER_SUCCESS;
    readonly user: IUser;
}

export interface IChangeUserFailedAction {
    readonly type: typeof CHANGE_USER_FAILED;
}

export type TAuthActions =
    IRegUserRequestAction |
    IRegUserSuccsessAction |
    IRegUserFailedAction |
    IAuthUserRequestAction |
    IAuthUserSuccsessAction |
    IAuthUserFailedAction |
    IGetUserRequestAction |
    IGetUserSuccsessAction |
    IGetUserFailedAction |
    ILogoutUserRequestAction |
    ILogoutUserSuccsessAction |
    ILogoutUserFailedAction |
    IFogotPassRequestAction |
    IFogotPassSuccsessAction |
    IFogotPassFailedAction |
    IResetPassRequestAction |
    IResetPassSuccsessAction |
    IResetPassFailedAction |
    IResetPassRequestAction |
    IResetPassSuccsessAction |
    IResetPassFailedAction |
    IChangeUserRequestAction |
    IChangeUserSuccsessAction |
    IChangeUserFailedAction;

export const regUser: AppThunk = (email: string, pass: string, name: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: REG_USER_REQUEST
        })
        fetch(`${URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": pass,
                "name": name
            })
        }).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: REG_USER_SUCCESS,
                    user: parsed.user
                })
                localStorage.setItem('accessToken', parsed.accessToken);
                localStorage.setItem('refreshToken', parsed.refreshToken);
            } else {
                dispatch({
                    type: REG_USER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: REG_USER_FAILED
            })
        })
    }
}

export const authUser: AppThunk = (email: string, pass: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: AUTH_USER_REQUEST
        })
        fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": pass
            })
        }).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    user: parsed.user
                })
                localStorage.setItem('accessToken', parsed.accessToken);
                localStorage.setItem('refreshToken', parsed.refreshToken);
            } else {
                dispatch({
                    type: AUTH_USER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: AUTH_USER_FAILED
            })
        })
    }
}

//Можно написать функцию обертку retriableFetch вокруг fetch
// Функция retriableFetch принимает те же параметры, что и fetch: url и options и выполняет запрос.
// Если запрос падает с ошибкой, то выполняется запрос обновления токена, новые токены сохраняются,
//  в options обновляется значение токена в заголовке.retriableFetch используется в запросах получения и 
//  обновления данных пользователя.

const checkReponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
};

export const refreshToken = async () => {
    const res = await fetch(`${URL}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
    });
    return checkReponse(res);
};

export const retriableFetch = async (url: string, options = {}) => {
    try {
        const res = await fetch(url, options);
        const result = await checkReponse(res);
        return result; // или можно сделать return await; главное дождаться промиса, чтоб catch сработал при ошибке
    } catch (err: any) {
        // сначала убеждаемся, что это не любая ошибка, а нужно токен обновить
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); // обновляем токен; пытаемся 1 раз, если не сложилось -- падаем с ошибкой
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            // if (options.headers) {
            //     options.headers = {}
            // }
            // // если в переданных опциях не было хедеров, добавляем в options пустой объект по ключу headers
            // options.headers.authorization = `Bearer ${refreshData.accessToken}`;
            const res = await fetch(url, options); // повторяем оригинальный запрос с оригинальными options (+ дополнительным хедером)
            return await checkReponse(res); // если все равно проваливаемся -- значит не судьба :/
        } else {
            throw err;
        }
    }
};

export const getUser: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_USER_REQUEST
        })
        retriableFetch(`${URL}/auth/user`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // Отправляем токен и схему авторизации в заголовке при запросе данных
                Authorization: `${localStorage.getItem('accessToken')}`
            },
        }).then(result => {
            dispatch({
                type: GET_USER_SUCCESS,
                user: result.user
            })
        }).catch(err => {
            dispatch({
                type: GET_USER_FAILED
            })
        })
    }
}

export const logout: AppThunk = (func: { (): void; (): void; }) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOGOUT_USER_REQUEST
        })
        fetch(`${URL}/auth/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).then(async res => {
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
            if (res && res.ok) {
                dispatch({
                    type: LOGOUT_USER_SUCCESS,
                })
                func();
            } else {
                dispatch({
                    type: LOGOUT_USER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: LOGOUT_USER_FAILED
            })
        })
    }
}

export const fogotPass: AppThunk = (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: FOGOT_PASS_REQUEST
        })
        fetch(`${URL}/password-reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email
            })
        }).then(async res => {
            if (res && res.status === 200) {
                dispatch({
                    type: FOGOT_PASS_SUCCESS,
                })
            } else {
                dispatch({
                    type: FOGOT_PASS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: FOGOT_PASS_FAILED
            })
        })
    }
}

export const resetPass: AppThunk = (pass: string, code: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: RESET_PASS_REQUEST
        })
        fetch(`${URL}/password-reset/reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: pass,
                token: code
            })
        }).then(async res => {
            if (res && res.ok) {
                dispatch({
                    type: RESET_PASS_SUCCESS,
                })
            } else {
                dispatch({
                    type: RESET_PASS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: RESET_PASS_FAILED
            })
        })
    }
}

export const changeUserData: AppThunk = (name: string, email: string, pass: string | undefined) => {
    return function (dispatch: AppDispatch) {
        let obj = {};
        if (pass === undefined) {
            obj = {
                name: name,
                email: email,
            }
        } else {
            obj = {
                name: name,
                email: email,
                password: pass
            }
        }
        dispatch({
            type: CHANGE_USER_REQUEST
        })
        fetch(`${URL}/auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(obj)
        }).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: CHANGE_USER_SUCCESS,
                    user: parsed.user
                })
            } else {
                dispatch({
                    type: CHANGE_USER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: CHANGE_USER_FAILED
            })
        })
    }
}