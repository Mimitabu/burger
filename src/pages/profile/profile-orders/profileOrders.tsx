import React, { useEffect } from "react";
import OrderStackItem from "../../../components/orders-stack/orsers-stack-item/ordersStackItem";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../../services/actions/wsActionTypes";
import { useDispatch, useSelector } from "../../../services/hooks";
import style from './profileOrders.module.css'

export default function ProfileOrdersPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);

    const ordersFull = useSelector((store) =>
        store.ws.messages
    )

    return (
        <div className={style.list}>
            {ordersFull.map((item) =>
                <OrderStackItem key={item._id} item={item} />
            )}
        </div>
    )
}