import { combineReducers } from 'redux';
import { itemReducer } from './item';

export const rootReducer = combineReducers({
    item: itemReducer
});