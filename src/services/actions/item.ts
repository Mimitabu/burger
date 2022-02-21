import { AppDispatch, AppThunk } from '../../utils';
import { ItemType } from '../../utils/ts-types';
import { URL } from '../../utils/url';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly items: ItemType[];
}

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export const getIngredients: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })

        fetch(`${URL}/ingredients`).then(async res => {
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

export const SHOW_MODAL: 'SHOW_MODAL' = 'SHOW_MODAL';
export const HIDE_MODAL: 'HIDE_MODAL' = 'HIDE_MODAL';
export const ADD_BUN_TO_ODER: 'ADD_BUN_TO_ODER' = 'ADD_BUN_TO_ODER';
export const ADD_INGREDIENT_TO_ORDER: 'ADD_INGREDIENT_TO_ORDER' = 'ADD_INGREDIENT_TO_ORDER';
export const REMOVE_FROM_ORDER: 'REMOVE_FROM_ORDER' = 'REMOVE_FROM_ORDER';
export const MOVE_ITEM_IN_ORDER: 'MOVE_ITEM_IN_ORDER' = 'MOVE_ITEM_IN_ORDER';

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

export interface IShowModalAction {
    readonly type: typeof SHOW_MODAL;
    readonly content: any;
}

export interface IHideModalAction {
    readonly type: typeof HIDE_MODAL;
}

export interface IAddBunToOrderAction {
    readonly type: typeof ADD_BUN_TO_ODER;
    readonly _id: string;
}

export interface IAddIngredientToOrderAction {
    readonly type: typeof ADD_INGREDIENT_TO_ORDER;
    readonly _id: string;
}

export interface IRemoveFromOrderAction {
    readonly _key: string;
    readonly type: typeof REMOVE_FROM_ORDER;
    readonly _id: string;
    readonly index: number;
}

export interface IMoveItemInOrderAction {
    readonly type: typeof MOVE_ITEM_IN_ORDER;
    readonly dragIndex: number;
    hoverIndex: number;
}

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly orderNumber: number
}

export interface IGetOrderFailedAction {
    readonly type: typeof GET_ORDER_FAILED;
}


export const postOrder: AppThunk = (data: Array<string>) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        })
        fetch(`${URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
                ingredients: data,
            })
        }).then(async res => {
            if (res && res.ok) {
                const parsed = await res.json();
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    orderNumber: parsed.order.number
                })
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_ORDER_FAILED
            })
        })
    }
}

export const CHANDGE_CURRENT_TAB = 'CHANDGE_CURRENT_TAB'

export interface IChangeCurrentTabAction {
    readonly current: string;
    readonly type: typeof CHANDGE_CURRENT_TAB;
}

export type TItemActions =
    IChangeCurrentTabAction |
    IGetOrderFailedAction |
    IGetOrderRequestAction |
    IGetOrderSuccessAction |
    IGetOrderFailedAction |
    IMoveItemInOrderAction |
    IMoveItemInOrderAction |
    IRemoveFromOrderAction |
    IAddIngredientToOrderAction |
    IAddBunToOrderAction |
    IHideModalAction |
    IShowModalAction |
    IGetIngredientsFailedAction |
    IGetIngredientsSuccessAction |
    IGetIngredientsRequestAction;



