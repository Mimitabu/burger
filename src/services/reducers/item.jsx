import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED
} from '../actions/item'

const initialStateItems = {
    items: [],
    itemsRequest: false,
    itemsFailed: false
}

export const itemReducer = (state = initialStateItems, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            }
        }
        case GET_ITEMS_SUCCESS: {
            return {
                ...state,
                itemsRequest: false,
                itemsFailed: false,
                items: action.items
            }
        }
        case GET_ITEMS_FAILED: {
            return {
                ...state,
                itemsRequest: false,
                itemsFailed: true
            }
        }
        default: {
            return {
                state
            }
        }
    }
}