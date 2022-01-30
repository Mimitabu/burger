export interface ItemType {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    _key: string
}

export interface Ingredient {
    items: ItemType[]
    buns: ItemType[]
    orderItems: ItemType[]
    isLoading: boolean,
    hasRequestFailed: boolean,
}

export interface Modal {
    currentIngredient: ItemType | {}
    show: boolean,
    content: string | null
}

export interface Order {
    orderNumber: string | null,
    isLoadingOrder: boolean,
    hasRequestOrderFailed: boolean
}

export interface CurrentTab {
    current: string
}

export interface WsActions {
    wsInit: string,
    wsInitAll: string,
    onOpen: string,
    onClose: string,
    onError: string,
    onMessage: string
}

export interface IOrders {
    _id: string,
    ingredients: Array<string>,
    status: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    number: number
}

// export interface IMessage {
//     orders: IOrders[] | [],
//     total: number,
//     totalToday: number
// }

export interface IMessage {
    _id: string,
    ingredients: Array<string>,
    status: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    number: number
}


export interface TWSState {
    wsConnected: boolean;
    messages: IMessage[];
    total: number;
    totalToday: number

    error?: Event;
}
