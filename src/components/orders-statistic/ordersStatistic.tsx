import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../services/reducers";
import { IMessage } from "../../utils/ts-types";
import style from './ordersStatistic.module.css';

export default function OrdersStatistic() {
    const ordersFull = useSelector((store: RootReducer) =>
        store.ws.messages
    )
    const { total, totalToday } = useSelector((store: RootReducer) =>
        store.ws
    )

    const doneOrders: (IMessage | undefined)[] = [];;
    const pendingOrders: (IMessage | undefined)[] = [];;

    ordersFull.forEach((elem) => {
        if (elem.status === 'done') {
            doneOrders.push(elem);
        }
        if ((elem.status === 'pending')) {
            pendingOrders.push(elem);
        }
    });

    if (doneOrders.length > 10) {
        doneOrders.splice(10)
    }
    if (pendingOrders.length > 10) {
        doneOrders.splice(10)
    }

    return (
        <div className={style.container}>
            <div className={style.list}>
                <div className="mr-9">
                    <h4 className="text text_type_main-medium mb-6">Готовы:</h4>
                    {doneOrders.map((number) =>
                        <li
                            key={number!._id}
                            className={`${style.color} text text_type_digits-default mb-2`}>
                            {number!.number}
                        </li>
                    )}
                </div>
                <div className={style.inProgress}>
                    <h4 className="text text_type_main-medium mb-6">В работе:</h4>
                    {pendingOrders.map((number) =>
                        <li
                            key={number!._id}
                            className={`${style.color} text text_type_digits-default mb-2`}>
                            {number!.number}
                        </li>
                    )}
                </div>
            </div>
            <div className="mb-15">
                <p className="text text_type_main-medium">
                    Выполнено за все время:
                </p>
                <div className={`${style.colorNum} text text_type_digits-large`}>{total}</div>
            </div>
            <div>
                <p className="text text_type_main-medium">
                    Выполнено за сегодня:
                </p>
                <div className={`${style.colorNum} text text_type_digits-large`}>{totalToday}</div>
            </div>
        </div>
    )
}