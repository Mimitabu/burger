import { URL } from '../../utils/url';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export function getItems() {
    return function (dispatch) {
        dispatch({
            type: GET_ITEMS_REQUEST
        })
        console.log('before fetch')
        debugger;
        fetch('https://norma.nomoreparties.space/api/ingredients').then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ITEMS_SUCCESS,
                    items: res.data
                })
            } else {
                dispatch({
                    type: GET_ITEMS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_ITEMS_FAILED
            })
        })
    }
}

