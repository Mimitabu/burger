import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser, orderReduser, tabReduser } from './item';
import { regReducer } from './auth';
import { CurrentTab, Ingredient, Modal, Order } from '../../utils/ts-types';

export interface RootReducer {
    ingredient: Ingredient,
    modal: Modal,
    order: Order,
    currentTab: CurrentTab,
    register: any
}

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser,
    order: orderReduser,
    currentTab: tabReduser,
    register: regReducer
});
