import React, { useEffect } from "react";
import style from './stackDetails.module.css';
import StackItem from "./stack-item/stackItem";
import { ItemType } from "../../utils/ts-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../services/reducers";
import { WS_CONNECTION_START_ALL, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsActionTypes";

export default function StackDetails() {
    let { id } = useParams<any>();
    const dispatch = useDispatch();
    const pathname = window.location.pathname;

    let type = '';

    if (pathname.includes('profile')) {
        type = WS_CONNECTION_START;
    } else {
        type = WS_CONNECTION_START_ALL;
    }

    useEffect(() => {
        dispatch({ type: type });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);

    const orders = useSelector((store: RootReducer) =>
        store.ws.messages);
    const { items } = useSelector((store: RootReducer) =>
        store.ingredient);
    const item = orders.filter(item => item._id === id)[0]

    if (!item) {
        return null;
    }

    const ingredientsArr: ItemType[] = [];

    items.forEach((elemItems) => {
        item.ingredients.forEach((elemItem) => {
            if (elemItems._id === elemItem) {
                ingredientsArr.push(elemItems)
            }
        })
    })

    let orderItems: (ItemType | undefined)[] = [];
    let buns: (ItemType | undefined)[] = [];

    ingredientsArr.forEach((element) => {
        if (element.type !== 'bun') {
            orderItems.push(element)
        }
        if (element.type === 'bun') {
            buns.push(element)
        }
    })

    const totalPrice = orderItems.reduce((acc, item) => acc + item!.price, 0) +
        2 * buns.reduce((acc, item) => acc + item!.price, 0);

    const diffDate = new Date().getDate() - Number(item.createdAt.split('T')[0].slice(8));
    const time = item.createdAt.split('T')[1].slice(0, 5);
    let currentDate = null;
    if (diffDate < 0) {
        currentDate = 'Давно';
    }
    if (diffDate === 0) {
        currentDate = 'Сегодня';
    }
    if (diffDate === 1) {
        currentDate = 'Вчера';
    }
    if (diffDate > 1) {
        currentDate = `${diffDate} дня назад`;
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
                {ingredientsArr.map((item, index) =>
                    <StackItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        type={item.type}
                        image={item.image}
                    />
                )}
            </div>
            <div className={style.bottom}>
                <span className="text text_type_main-small text_color_inactive">
                    {`${currentDate}, ${time} i-GMT+3`}
                </span>
                <div className={style.totalContainer}>
                    <div className="text text_type_digits-default mr-2">
                        {totalPrice}
                    </div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}
