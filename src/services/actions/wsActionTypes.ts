import { IPlayload } from "../../utils/ts-types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_START_ALL: 'WS_CONNECTION_START_ALL' = 'WS_CONNECTION_START_ALL';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export interface IWsConnectionStartdAction {
    readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionStartAllAction {
    readonly type: typeof WS_CONNECTION_START_ALL;
}

export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
    payload: Event | undefined;
    readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
    readonly payload: IPlayload;
    readonly type: typeof WS_GET_MESSAGE;
}

export type TWsActions =
    IWsConnectionStartdAction |
    IWsConnectionStartAllAction |
    IWsConnectionSuccessAction |
    IWsConnectionErrorAction |
    IWsConnectionClosedAction |
    IWsGetMessageAction;