import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderStackItem from "../../../components/orders-stack/orsers-stack-item/ordersStackItem";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../../services/actions/wsActionTypes";
import { RootReducer } from "../../../services/reducers";
import style from './profileOrders.module.css'

export default function ProfileOrdersPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);

    const ordersFull = useSelector((store: RootReducer) =>
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