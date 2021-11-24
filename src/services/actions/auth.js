import { URL } from '../../utils/url';

export const REG_USER_REQUEST = 'REG_USER_REQUEST';
export const REG_USER_SUCCESS = 'REG_USER_SUCCESS';
export const REG_USER_FAILED = 'REG_USER_FAILED';

export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export function regUser(email, pass, name) {
    return function (dispatch) {
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
                const accessToken = parsed.accessToken.split('Bearer ')[1];
                localStorage.setItem('accessToken', accessToken);
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

export function authUser(email, pass) {
    return function (dispatch) {
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
                const accessToken = parsed.accessToken.split('Bearer ')[1];
                localStorage.setItem('accessToken', accessToken);
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

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
    return fetch(`${URL}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
    }).then(checkReponse);
};

export const retriableFetch = async (url, options = {}) => {
    try {
        const res = await fetch(url, options);
        const result = await checkReponse(res);
        return result; // или можно сделать return await; главное дождаться промиса, чтоб catch сработал при ошибке
    } catch (err) {
        // сначала убеждаемся, что это не любая ошибка, а нужно токен обновить
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); // обновляем токен; пытаемся 1 раз, если не сложилось -- падаем с ошибкой
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            if (options.headers) {
                options.headers = {}
            }
            // если в переданных опциях не было хедеров, добавляем в options пустой объект по ключу headers
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); // повторяем оригинальный запрос с оригинальными options (+ дополнительным хедером)
            return await checkReponse(res); // если все равно проваливаемся -- значит не судьба :/
        } else {
            throw err;
        }
    }
};


export function getUser() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_REQUEST
        })
        retriableFetch(`${URL}/auth/user`, {
            method: "GET",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                // Отправляем токен и схему авторизации в заголовке при запросе данных
                Authorization: localStorage.getItem('accessToken')
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }).then(result => {
            console.log(result.user)
            dispatch({
                type: GET_USER_SUCCESS,
                user: result.user
            })
        }
        )
    }
}

// export function getUser() {
//     return function (dispatch) {
//         dispatch({
//             type: GET_USER_REQUEST
//         })
//         retriableFetch(`${URL}/auth/user`, {
//             method: "GET",
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Отправляем токен и схему авторизации в заголовке при запросе данных
//                 Authorization: 'Bearer ' + localStorage.getItem('accesToken')
//             },
//             redirect: 'follow',
//             referrerPolicy: 'no-referrer'
//         }).then(async res => {
//             if (res && res.ok) {
//                 const parsed = await res.json();
//                 dispatch({
//                     type: AUTH_USER_SUCCESS,
//                     user: parsed.user
//                 })
//                 const accessToken = parsed.accessToken.split('Bearer ')[1];
//                 localStorage.setItem('accessToken', accessToken);
//                 localStorage.setItem('refreshToken', parsed.refreshToken);
//             } else {
//                 dispatch({
//                     type: AUTH_USER_FAILED
//                 })
//             }
//         }).catch(err => {
//             dispatch({
//                 type: AUTH_USER_FAILED
//             })
//         })
//     }
// }