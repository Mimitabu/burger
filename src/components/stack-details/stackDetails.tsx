import React from "react";
import style from './stackDetails.module.css';
import StackItem from "./stack-item/stackItem";
import { IOrders } from "../../utils/ts-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface StackDetailsProps {
    item: IOrders
}



export default function StackDetails({ item }: StackDetailsProps) {
    const diffDate = new Date().getDate() - Number(item.createdAt.split('T')[0].slice(8));
    const time = item.createdAt.split('T')[1].slice(0, 5);
    let currentDate = null;
    if (diffDate === 0) {
        currentDate = 'Сегодня'
    }
    if (diffDate === 1) {
        currentDate = 'Вчера'
    }
    if (diffDate > 1) {
        currentDate = `${diffDate} дня назад`
    }

    return (
        <div className={style.container}>
            <p className="text text_type_digits-default mb-10">
                {`#${item.number}`}
            </p>
            <h4 className="text text_type_main-medium mb-3">
                {item.name}
            </h4>
            <p className={`${style.colorText} text text_type_main-small mb-15`}>
                {item.status === 'done' ? 'Выполнен' : item.status === 'pending' ? ' Готовится' : 'Создан'}
            </p>
            <p className="text text_type_main-medium mb-6">
                Состав:
            </p>
            <div className={`${style.stack} mb-10`}>
                <StackItem />
            </div>
            <div className={style.bottom}>
                <span className="text text_type_main-small text_color_inactive">
                    {`${currentDate}, ${time} i-GMT+3`}
                </span>
                <div className={style.totalContainer}>
                    <div className="text text_type_digits-default mr-2"></div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}