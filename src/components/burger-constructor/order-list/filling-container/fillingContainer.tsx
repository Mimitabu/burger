import React from "react";
import style from './fillingContainer.module.css';
import FillingItem from "./filling-item/fillingItem";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../services/reducers";
import { ItemType } from "../../../../utils/ts-types";



function FillingContainer() {
    const { orderItems } = useSelector((store: RootReducer) =>
        store.ingredient)

    return (
        <div className={style.orderContainer} >
            {orderItems.map((item: ItemType, index: number) => (
                <FillingItem key={item._key} item={item} index={index} />
            ))}
        </div>
    )
}

export default FillingContainer
