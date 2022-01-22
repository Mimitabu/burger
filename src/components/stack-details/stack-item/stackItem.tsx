import React from "react";
import style from './stackItem.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function StackItem() {
    return (
        <div className={style.container}>
            <img className={style.image} />
        </div>
    )
}