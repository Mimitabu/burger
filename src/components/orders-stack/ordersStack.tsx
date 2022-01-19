import React from "react";
import style from './ordersStack.module.css';
import OrderStackItem from "./orsers-stack-item/ordersStackItem";

export default function OrderStack() {
    return (
        <div className={`${style.container} mr-15`}>
            <div className={style.stack}>
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
                <OrderStackItem />
            </div>
        </div>
    )
}