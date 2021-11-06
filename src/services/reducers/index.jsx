import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser, orderReduser } from './item';

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser,
    order: orderReduser
});