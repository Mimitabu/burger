import { rootReducer } from './reducers';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { WsActions } from '../utils/ts-types';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
    WS_CONNECTION_START_ALL
} from './actions/wsActionTypes';
import { WSURL } from '../utils/url';
import { socketMiddleware } from './middleware/socketMiddleware';

const wsUrl = WSURL;

const wsActions: WsActions = {
    wsInit: WS_CONNECTION_START,
    wsInitAll: WS_CONNECTION_START_ALL,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
};

export const initStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunkMiddleware, socketMiddleware(wsUrl, wsActions)))
    );

// const composeEnhancers =
//     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//         : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// export const store = createStore(rootReducer, enhancer);

