import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser, orderReduser, tabReduser } from './item';
import { regReducer } from './auth';


export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser,
    order: orderReduser,
    currentTab: tabReduser,
    register: regReducer
});