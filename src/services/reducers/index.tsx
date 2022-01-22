import { combineReducers } from 'redux';
import { ingredientReducer, modalReduser, orderReduser, tabReduser } from './item';
import { regReducer } from './auth';
import { CurrentTab, Ingredient, Modal, Order, TWSState } from '../../utils/ts-types';
import { wsReducer } from './wsReducer';

export interface RootReducer {
    ingredient: Ingredient,
    modal: Modal,
    order: Order,
    currentTab: CurrentTab,
    register: any,
    ws: TWSState
}

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    modal: modalReduser,
    order: orderReduser,
    currentTab: tabReduser,
    register: regReducer,
    ws: wsReducer
});
