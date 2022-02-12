import React from "react";
import style from './stackItem.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IStackItem {
    name: string,
    type: string,
    price: number,
    image: string
}

export default function StackItem({ name, type, price, image }: IStackItem) {
    return (
        <div className={style.container}>
            <div className={style.nameCont}>
                <img src={image} className={style.image} alt={name} />
                <p className="text text_type_main-default mr-4">
                    {name}
                </p>
            </div>
            <div className={style.total}>
                <span className="text text_type_digits-default mr-4">
                    {type === 'bun' ? `2 x ${price}` : `1 x ${price}`}
                </span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}