import React from "react";
import style from './ordersStackItem.module.css';
import image from '../../../images/ingredients.svg';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderStackItem() {
    return (
        <div className={`${style.container} mb-6 mr-2 p-6`}>
            <div className={style.top}>
                <span className="text text_type_digits-default">#034535</span>
                <span className="text text_type_main-small text_color_inactive">
                    Сегодня, 16:20 i-GMT+3
                </span>
            </div>
            <div className="text text_type_main-medium mb-2">
                Death Star Starship Main бургер
            </div>
            {/* TODO
            из стора доставать статус и если он есть вообще
            отображать здесь */}

            <div className={style.bottom}>
                <img src={image} alt="ingredients-stack" className={style.imageStack} />
                <div className={style.totalContainer}>
                    <div className="text text_type_digits-default mr-2">480</div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}