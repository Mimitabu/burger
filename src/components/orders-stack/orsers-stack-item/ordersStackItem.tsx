import React from "react";
import style from './ordersStackItem.module.css';
import image from '../../../images/ingredients.svg';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IOrders, ItemType } from '../../../utils/ts-types';
import { useHistory } from "react-router-dom";
import { useSelector } from "../../../services/hooks";

interface OrderStackItemProps {
    item: IOrders
}

export default function OrderStackItem({ item }: OrderStackItemProps) {
    const history = useHistory();
    let currentPath = '';

    if (window.location.pathname.includes('feed')) {
        currentPath = '/feed';
    } else {
        currentPath = '/profile/orders';
    }

    function openModal() {
        history.push({
            state: { background: { pathname: currentPath } },
            pathname: `${currentPath}/${item._id}`,
        });
    }

    const diffDate = new Date().getDate() - Number(item.createdAt.split('T')[0].slice(8));
    const time = item.createdAt.split('T')[1].slice(0, 5);

    let currentDate = null;
    if (diffDate < 0) {
        currentDate = `Давно`
    }
    if (diffDate === 0) {
        currentDate = 'Сегодня'
    }
    if (diffDate === 1) {
        currentDate = 'Вчера'
    }
    if (diffDate > 1) {
        currentDate = `${diffDate} дня назад`
    }
    const { items } = useSelector((store) =>
        store.ingredient);

    let orderItems: (ItemType | undefined)[] = [];
    let buns: (ItemType | undefined)[] = [];

    item.ingredients.forEach((el) => {
        items.forEach((element) => {
            if (element._id === el && element.type !== 'bun') {
                orderItems.push(element)
            }
            if (element._id === el && element.type === 'bun') {
                buns.push(element)
            }
        })
    })

    const totalPrice = orderItems.reduce((acc, item) => acc + item!.price, 0) +
        2 * buns.reduce((acc, item) => acc + item!.price, 0);

    return (
        <div className={`${style.container} mb-6 mr-2 p-6`} onClick={openModal}>
            <div className={style.top}>
                <span className="text text_type_digits-default">{`#${item.number}`}</span>
                <span className="text text_type_main-small text_color_inactive">
                    {`${currentDate}, ${time} i-GMT+3`}
                </span>
            </div>
            <p className="text text_type_main-medium mb-2">
                {item.name}
            </p>
            <p className="text text_type_main-small">
                {item.status === 'done' ? 'Выполнен' : item.status === 'pending' ? ' Готовится' : 'Создан'}
            </p>
            <div className={style.bottom}>
                <img src={image} alt="ingredients-stack" className={style.imageStack} />
                <div className={style.totalContainer}>
                    <div className="text text_type_digits-default mr-2">{totalPrice}</div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}