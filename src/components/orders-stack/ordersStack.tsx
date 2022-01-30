import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../services/reducers";
import style from './ordersStack.module.css';
import OrderStackItem from "./orsers-stack-item/ordersStackItem";

export default function OrderStack() {
    const ordersFull = useSelector((store: RootReducer) =>
        store.ws.messages
    )

    return (
        <div className={`${style.container} mr-15`}>
            <div className={style.stack}>
                {ordersFull.map((item) =>
                    <OrderStackItem key={item._id} item={item} />
                )}
            </div>
        </div>
    )
}