import { initialState } from "./wsReducer";
import { wsReducer } from "./wsReducer";
import * as types from '../actions/wsActionTypes';

describe('ws reducer', () => {
    it('should return the initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialState)
    })
    it('should open ws', () => {
        expect(wsReducer(undefined, {
            type: types.WS_CONNECTION_SUCCESS
        })).toEqual(
            {
                ...initialState,
                error: undefined,
                wsConnected: true
            }
        )
    })
    it('should handel error in ws', () => {
        expect(wsReducer(undefined, {
            type: types.WS_CONNECTION_ERROR,
            payload: 'some error'
        })).toEqual(
            {
                ...initialState,
                error: 'some error',
                wsConnected: false
            }
        )
    })
    it('should close ws', () => {
        expect(wsReducer(undefined, {
            type: types.WS_CONNECTION_CLOSED
        })).toEqual(
            {
                ...initialState,
                error: undefined,
                wsConnected: false
            }
        )
    })
    it('should handel message in ws', () => {
        expect(wsReducer(undefined, {
            type: types.WS_GET_MESSAGE,
            payload: {
                orders: [
                    {
                        createdAt: "2022-02-20T09:43:10.138Z",
                        ingredients: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c7"],
                        name: "Флюоресцентный space бургер",
                        number: 10544,
                        status: "done",
                        updatedAt: "2022-02-20T09:43:10.441Z",
                        _id: "62120d2e25b9a4001b6e0475"
                    },
                    {
                        createdAt: "2022-02-20T09:38:55.406Z",
                        ingredients: ["60d3b41abdacab0026a733c7"],
                        name: "Флюоресцентный бургер",
                        number: 10543,
                        status: "done",
                        updatedAt: "2022-02-20T09:38:55.674Z",
                        _id: "62120c2f25b9a4001b6e046d"
                    }
                ],
                total: 10457,
                totalToday: 99,
                success: true
            }
        })).toEqual(
            {
                ...initialState,
                error: undefined,
                messages: [
                    {
                        createdAt: "2022-02-20T09:43:10.138Z",
                        ingredients: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c7"],
                        name: "Флюоресцентный space бургер",
                        number: 10544,
                        status: "done",
                        updatedAt: "2022-02-20T09:43:10.441Z",
                        _id: "62120d2e25b9a4001b6e0475"
                    },
                    {
                        createdAt: "2022-02-20T09:38:55.406Z",
                        ingredients: ["60d3b41abdacab0026a733c7"],
                        name: "Флюоресцентный бургер",
                        number: 10543,
                        status: "done",
                        updatedAt: "2022-02-20T09:38:55.674Z",
                        _id: "62120c2f25b9a4001b6e046d"
                    }
                ],
                total: 10457,
                totalToday: 99
            }
        )
    })
})