import { URL } from '../../utils/url';

export const REG_USER_REQUEST = 'REG_USER_REQUEST';
export const REG_USER_SUCCESS = 'REG_USER_SUCCESS';
export const REG_USER_FAILED = 'REG_USER_FAILED';

// function setCookie(name, value, options = {}) {

//     options = {
//         path: '/',
//         // при необходимости добавьте другие значения по умолчанию
//         ...options
//     };

//     if (options.expires instanceof Date) {
//         options.expires = options.expires.toUTCString();
//     }

//     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//     for (let optionKey in options) {
//         updatedCookie += "; " + optionKey;
//         let optionValue = options[optionKey];
//         if (optionValue !== true) {
//             updatedCookie += "=" + optionValue;
//         }
//     }

//     document.cookie = updatedCookie;
// }

export function setCookie(name, value, props) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

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
                })
                const accessToken = parsed.accessToken.split('Bearer ')[1];
                setCookie('accessToken', accessToken, { 'max-age': 1200 });
                setCookie('refreshToken', parsed.refreshToken, { 'max-age': 604800 });
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