import React from "react";
import style from './fillingContainer.module.css';
import FillingItem from "./filling-item/fillingItem";
import { useSelector } from "react-redux";

function FillingContainer() {
    const { orderItems } = useSelector(store =>
        store.ingredient)

    return (
        <div className={style.orderContainer} >
            {orderItems.map((item, index) => (
                <FillingItem key={item._key} item={item} index={index} />
            ))}
        </div>
    )
}

export default FillingContainer
