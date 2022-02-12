import { ItemType } from "./ts-types";

export const totalPriceSelector = (state: { ingredient: { orderItems: ItemType[]; buns: ItemType[]; }; }) => {
    const {
        ingredient: { orderItems, buns }
    } = state;
    return orderItems.reduce((acc: number, item: { price: number; }) => acc + item.price, 0) +
        2 * buns.reduce((acc: number, item: { price: number; }) => acc + item.price, 0);
};
