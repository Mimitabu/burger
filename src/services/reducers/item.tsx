import { v4 as uuid_v4 } from "uuid";
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SHOW_MODAL,
    HIDE_MODAL,
    ADD_BUN_TO_ODER,
    REMOVE_FROM_ORDER,
    ADD_INGREDIENT_TO_ORDER,
    MOVE_ITEM_IN_ORDER,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    CHANDGE_CURRENT_TAB,
    TItemActions
} from '../actions/item';

import { ItemType } from "../../utils/ts-types";

function removeItem(arr: Array<any>, index: number) {
    arr.splice(index, 1);
    return arr
}

function moveItem(arr: Array<any>, dragIndex: number, hoverIndex: number) {
    const dragCard = arr[dragIndex];
    arr.splice(dragIndex, 1);
    arr.splice(hoverIndex, 0, dragCard);
    return arr
}

export interface IinitialStateIngredients {
    items: ItemType[],
    buns: ItemType[],
    orderItems: ItemType[],
    isLoading: boolean,
    hasRequestFailed: boolean,

}

export const initialStateIngredients: IinitialStateIngredients = {
    items: [],
    buns: [],
    orderItems: [],
    isLoading: false,
    hasRequestFailed: false,
}

export const ingredientReducer = (state = initialStateIngredients, action: TItemActions): IinitialStateIngredients => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasRequestFailed: false,
                items: action.items
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasRequestFailed: true,
            }
        }
        case ADD_BUN_TO_ODER: {
            return {
                ...state,
                buns: [...state.items.filter(item => item._id === action._id &&
                    item.type === 'bun')],
                items: [...state.items].map(item => item.type === 'bun' ? (
                    item._id === action._id ? { ...item, __v: 2 } : { ...item, __v: 0 }) : item
                )
            }

        }
        case ADD_INGREDIENT_TO_ORDER: {
            return {
                ...state,
                orderItems: [...state.orderItems, ...state.items.filter(item => item._id === action._id &&
                    item.type !== 'bun')].map(item =>
                        item._id === action._id ? { ...item, _key: uuid_v4() } : item),
                items: [...state.items].map(item =>
                    item._id === action._id ? { ...item, __v: ++item.__v } : item
                ),

            }
        }
        case REMOVE_FROM_ORDER: {
            return {
                ...state,
                orderItems: state.orderItems.filter(
                    (item) => item._key !== action._key
                ),
                items: [...state.items].map(item =>
                    item._id === action._id ? { ...item, __v: --item.__v } : item
                )
            }
        }
        case MOVE_ITEM_IN_ORDER: {
            return {
                ...state,
                orderItems: moveItem([...state.orderItems], action.dragIndex, action.hoverIndex)
            }
        }
        default: {
            return state;
        }
    }
}

type TModalState = {
    currentIngredient: any,
    show: boolean,
    content: any
}

const initialStateModal: TModalState = {
    currentIngredient: {},
    show: false,
    content: null
}

export const modalReduser = (state = initialStateModal, action: TItemActions): TModalState => {
    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                show: true,
                content: action.content,
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                show: false,
                content: null,
                currentIngredient: {}
            }
        }
        default: {
            return state;
        }
    }
}

type TOrderState = {
    orderNumber: null | number,
    isLoadingOrder: boolean,
    hasRequestOrderFailed: boolean
}

const initialStateOrder: TOrderState = {
    orderNumber: null,
    isLoadingOrder: false,
    hasRequestOrderFailed: false
}

export const orderReduser = (state = initialStateOrder, action: TItemActions): TOrderState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                isLoadingOrder: true
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                isLoadingOrder: false,
                hasRequestOrderFailed: false,
                orderNumber: action.orderNumber
            }
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                isLoadingOrder: false,
                hasRequestOrderFailed: true
            }
        }
        default: {
            return state;
        }
    }
}

type TTabState = {
    current: string;
}

const initialStateTab: TTabState = {
    current: 'Булки'
}

export const tabReduser = (state = initialStateTab, action: TItemActions): TTabState => {
    switch (action.type) {
        case CHANDGE_CURRENT_TAB: {
            return {
                ...state,
                current: action.current
            }
        }
        default: {
            return state;
        }
    }
}