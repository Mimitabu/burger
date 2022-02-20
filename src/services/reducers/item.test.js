import { initialStateIngredients } from "./item";
import { ingredientReducer } from "./item";
import * as types from '../actions/item';
import { v4 as uuid_v4 } from "uuid";
jest.mock('uuid');

describe('item reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientReducer(undefined, {})).toEqual(initialStateIngredients)
    })
    it('showld handle ingredient request', () => {
        expect(ingredientReducer(undefined, {
            type: types.GET_INGREDIENTS_REQUEST
        })).toEqual(
            {
                ...initialStateIngredients,
                isLoading: true
            }
        )
    })
    it('showld handle ingredient load', () => {
        expect(ingredientReducer(undefined, {
            type: types.GET_INGREDIENTS_SUCCESS,
            items: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            ]
        })).toEqual(
            {
                ...initialStateIngredients,
                isLoading: false,
                hasRequestFailed: false,
                items: [
                    {
                        "_id": "60666c42cc7b410027a1a9b1",
                        "name": "Краторная булка N-200i",
                        "type": "bun",
                        "proteins": 80,
                        "fat": 24,
                        "carbohydrates": 53,
                        "calories": 420,
                        "price": 1255,
                        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                        "__v": 0
                    },
                    {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        )
    })
    it('showld handle ingredient error', () => {
        expect(ingredientReducer(undefined, {
            type: types.GET_INGREDIENTS_FAILED
        })).toEqual(
            {
                ...initialStateIngredients,
                isLoading: false,
                hasRequestFailed: true
            }
        )
    })
    it('showld add item to order list & increase count', () => {
        expect(ingredientReducer({
            items: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            ],
            buns: [],
            orderItems: [],
            isLoading: false,
            hasRequestFailed: false,
        }, {
            type: types.ADD_BUN_TO_ODER,
            _id: '60666c42cc7b410027a1a9b1'
        })).toEqual(
            {
                ...initialStateIngredients,
                buns: [{
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                }],
                items: [
                    {
                        "_id": "60666c42cc7b410027a1a9b1",
                        "name": "Краторная булка N-200i",
                        "type": "bun",
                        "proteins": 80,
                        "fat": 24,
                        "carbohydrates": 53,
                        "calories": 420,
                        "price": 1255,
                        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                        "__v": 2
                    },
                    {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        )
    })

    it('showld add item to order list & increase count', () => {
        uuid_v4.mockImplementation(() => 'some_key');
        expect(ingredientReducer({
            items: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            ],
            buns: [],
            orderItems: [],
            isLoading: false,
            hasRequestFailed: false,
        }, {
            type: types.ADD_INGREDIENT_TO_ORDER,
            _id: '60666c42cc7b410027a1a9b5'
        })).toEqual(
            {
                ...initialStateIngredients,
                orderItems: [{
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0,
                    "_key": 'some_key'
                }],
                items: [
                    {
                        "_id": "60666c42cc7b410027a1a9b1",
                        "name": "Краторная булка N-200i",
                        "type": "bun",
                        "proteins": 80,
                        "fat": 24,
                        "carbohydrates": 53,
                        "calories": 420,
                        "price": 1255,
                        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                        "__v": 0
                    },
                    {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 1
                    }
                ]
            }
        )
    })

    it('showld remove item from order list & decrease count', () => {
        expect(ingredientReducer({
            items: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 1
                }
            ],
            buns: [],
            orderItems: [
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0,
                    "_key": "str4"
                }
            ],
            isLoading: false,
            hasRequestFailed: false,
        }, {
            type: types.REMOVE_FROM_ORDER,
            _id: '60666c42cc7b410027a1a9b5',
            index: 0,
            _key: 'str4'

        })).toEqual(
            {
                items: [{
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }],
                buns: [],
                orderItems: [],
                isLoading: false,
                hasRequestFailed: false
            }
        )
    })

    it('showld move item in order', () => {
        expect(ingredientReducer({
            items: [],
            buns: [],
            orderItems: [
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b6",
                    "name": "Биокотлета из марсианской Магнолии",
                    "type": "main",
                    "proteins": 420,
                    "fat": 142,
                    "carbohydrates": 242,
                    "calories": 4242,
                    "price": 424,
                    "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                    "__v": 0
                }
            ],
            isLoading: false,
            hasRequestFailed: false,
        }, {
            type: types.MOVE_ITEM_IN_ORDER,
            dragIndex: 1,
            hoverIndex: 0
        })).toEqual(
            {
                ...initialStateIngredients,
                orderItems: [
                    {
                        "_id": "60666c42cc7b410027a1a9b6",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0
                    },
                    {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        )
    })
})