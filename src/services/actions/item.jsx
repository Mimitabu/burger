import { URL } from '../../utils/url';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })

        fetch(URL).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    items: parsed.data
                })
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_INGREDIENTS_FAILED
            })
        })
    }
}


export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const ADD_BUN_TO_ODER = 'ADD_BUN_TO_ODER';
export const ADD_INGREDIENT_TO_ORDER = 'ADD_INGREDIENT_TO_ORDER';
export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';
export const MOVE_ITEM_IN_ORDER = 'MOVE_ITEM_IN_ORDER';

