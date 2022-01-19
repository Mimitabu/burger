import React from "react";
import style from './feed.module.css';
import OrderStack from "../../components/orders-stack/ordersStack";
import OrdersStatistic from "../../components/orders-statistic/ordersStatistic";

export default function Feed() {
    return (
        <section className={style.container}>
            <h3 className={`${style.header} text text_type_main-medium mb-5`}>Лента заказов</h3>
            <div className={style.main}>
                <OrderStack />
                <OrdersStatistic />
            </div>
        </section>
    )
}