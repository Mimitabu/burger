import React from "react";
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderList from "./order-list/orderList";
import TotalBlock from "./total-block/totalBlock";
import { useSelector } from "react-redux";


function BurgerConstructor() {
    const orderItems = useSelector(store =>
        store.ingredient.orderItems
    )

    return (
        <section className={`${burgerConstructorStyle.section} pt-25 pl-4`}>
            <OrderList data={orderItems} />
            <TotalBlock />
        </section>
    )
}

export default BurgerConstructor

// BurgerConstructor.propTypes = {
//     data: data
// }
