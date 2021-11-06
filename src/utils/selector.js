export const totalPriceSelector = state => {
    const {
        ingredient: { orderItems, buns }
    } = state;
    return orderItems.reduce((acc, item) => acc + item.price, 0) +
        2 * buns.reduce((acc, item) => acc + item.price, 0);
};
