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
    items: ItemType[] | []
    buns: ItemType[] | []
    orderItems: ItemType[] | []
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

