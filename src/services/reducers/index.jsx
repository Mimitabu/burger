import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser } from './item';

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser
});