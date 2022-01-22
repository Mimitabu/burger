import React, { useEffect } from "react";
import style from './feed.module.css';
import OrderStack from "../../components/orders-stack/ordersStack";
import OrdersStatistic from "../../components/orders-statistic/ordersStatistic";
import { useDispatch, useSelector, useStore } from "react-redux";
import { WS_CONNECTION_START_ALL, WS_CONNECTION_CLOSED } from "../../services/actions/wsActionTypes";
import { RootReducer } from "../../services/reducers";

export default function Feed() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('start')
        dispatch({ type: WS_CONNECTION_START_ALL });
        return () => {
            console.log('end')
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);

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