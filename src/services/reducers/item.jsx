import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SHOW_MODAL,
    HIDE_MODAL,
    ADD_BUN_TO_ODER,
    REMOVE_FROM_ORDER
} from '../actions/item'

const initialStateIngredients = {
    items: [],
    buns: [],
    orderItems: [],
    isLoading: false,
    hasRequestFailed: false
}

export const ingredientReducer = (state = initialStateIngredients, action) => {
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
                hasRequestFailed: true
            }
        }
        case ADD_BUN_TO_ODER: {
            return {
                ...state,
                buns: [...state.buns, ...state.items.filter(item => item._id === action._id &&
                    item.type === 'bun')]
            }

        }
        case REMOVE_FROM_ORDER: {
            return {
                ...state,
                orderItems: [...state.orderItems].filter(item => item._id !== action._id)
            }
        }
        default: {
            return state;
        }
    }
}

const initialStateModal = {
    currentIngredient: {},
    show: false,
    content: null
}

export const modalReduser = (state = initialStateModal, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                show: true,
                content: action.content,
                currentIngredient: action.currentIngredient
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