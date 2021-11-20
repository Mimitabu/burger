import { URL } from '../../utils/url';

export const FOGOT_PASSWORD_REQUEST = 'FOGOT_PASSWORD_REQUEST';
export const FOGOT_PASSWORD_SUCCESS = 'FOGOT_PASSWORD_SUCCESS';
export const FOGOT_PASSWORD_FAILED = 'FOGOT_PASSWORD_FAILED';

export function postEmail(data) {
    return function (dispatch) {
        dispatch({
            type: FOGOT_PASSWORD_REQUEST
        })
        fetch(`${URL}/password-reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data
            })
        }).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: FOGOT_PASSWORD_SUCCESS,
                })
            } else {
                dispatch({
                    type: FOGOT_PASSWORD_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: FOGOT_PASSWORD_FAILED
            })
        })
    }
}