import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderStack from "../../components/orders-stack/ordersStack";
import OrderStackItem from "../../components/orders-stack/orsers-stack-item/ordersStackItem";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsActionTypes";
import { RootReducer } from "../../services/reducers";

export default function ProfileOrdersPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('start')
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            console.log('end')
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);


    const ordersFull = useSelector((store: RootReducer) =>
        store.ws.messages
    )

    console.log('ordersFull', ordersFull)

    return (
        <div></div>
        // <>
        //     {ordersFull.map((item, index) =>
        //         <OrderStackItem key={item._id} item={item} />
        //     )}
        // </>
    )
}