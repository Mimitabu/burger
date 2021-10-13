import React from "react";
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderList from "../order-list/orderList";
import TotalBlock from "../total-block/totalBlock";

function BurgerConstructor(props) {
    return (
        <section className={`${burgerConstructorStyle.section} pt-25 pl-4`}>
            <OrderList data={props.data} />
            <TotalBlock />
        </section>
    )
}

export default BurgerConstructor