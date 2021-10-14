import React from "react";
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderList from "../order-list/orderList";
import TotalBlock from "../total-block/totalBlock";

function BurgerConstructor(props) {
    const [state, setState] = React.useState(false);

    function openModal() {
        setState(true)
    }

    function closeModal() {
        setState(false)
    }

    return (
        <section className={`${burgerConstructorStyle.section} pt-25 pl-4`}>
            <OrderList data={props.data} />
            <TotalBlock />
        </section>
    )
}

export default BurgerConstructor