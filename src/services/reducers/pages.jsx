import {
    FOGOT_PASSWORD_REQUEST,
    FOGOT_PASSWORD_SUCCESS,
    FOGOT_PASSWORD_FAILED
} from "../actions/pages"

const initialStatefogotPassPage = {
    isLoading: false,
    hasRequestFailed: false
}

export const fogotPageReduser = (state = initialStatefogotPassPage, action) => {
    switch (action.type) {
        case FOGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FOGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasRequestFailed: false,
                items: action.items
            }
        }
        case FOGOT_PASSWORD_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasRequestFailed: true
            }
        }
        default: {
            return state;
        }
    }
}