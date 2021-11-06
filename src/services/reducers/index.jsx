import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser, orderReduser, tabReduser } from './item';

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser,
    order: orderReduser,
    currentTab: tabReduser
});