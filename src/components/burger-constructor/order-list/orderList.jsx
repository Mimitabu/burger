import React, { useEffect, useMemo, useRef } from "react";
import { v4 as uuid_v4 } from "uuid";
import orderListStyle from './orderList.module.css';
import { ConstructorElement, DragIcon } from '../../../index';
import { data } from "../../../utils/types";
import { useDrop } from "react-dnd";
import {
    ADD_BUN_TO_ODER,
    REMOVE_FROM_ORDER,
    ADD_INGREDIENT_TO_ORDER
} from "../../../services/actions/item";
import { useDispatch, useSelector, useStore } from "react-redux";

function OrderList() {
    const dispatch = useDispatch();

    const { buns, orderItems } = useSelector(store =>
        store.ingredient
    )

    const ref = useRef(null);

    function moveItem(item) {
        const { _id } = item.item
        console.log(item.item.type)
        if (item.item.type === 'bun') {
            if (buns.length === 0 || buns.length === 1) {
                dispatch({
                    type: ADD_BUN_TO_ODER,
                    ...{ _id }
                });
            }
        } else {
            dispatch({
                type: ADD_INGREDIENT_TO_ORDER,
                ...{ _id }
            });
        }
    }

    const removeItem = (_id) => {
        dispatch({
            type: REMOVE_FROM_ORDER,
            _id
        })
    }

    const [{ }, dropTarget] = useDrop({
        accept: 'ingredients',
        drop(itemId) {
            moveItem(itemId);
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    });

    const bunTop = useMemo(
        () => {
            return buns.map((item, index) => (
                <div key={uuid_v4()} className='ml-6' style={{ display: 'flex', width: "100%" }}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${item.name} (верх)`}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </div>
            ))
        }, [buns]
    );
    const bunBottom = useMemo(
        () => {
            return buns.map((item) => (
                <div key={uuid_v4()} className='ml-6' style={{ display: 'flex', width: "100%" }}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${item.name} (низ)`}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </div >
            ));
        }, [buns]
    );

    const inrgedients = useMemo(
        () => {
            return orderItems.map((item) => (
                <div key={uuid_v4()} className='mr-2' >
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                        handleClose={() => { removeItem(item._id) }}
                    />
                </div>
            ))
        }, [orderItems]
    )

    return (
        <div ref={dropTarget} className={`${orderListStyle.list} mb-10`}>
            {bunTop}
            <div className={orderListStyle.orderContainer}>
                {inrgedients}
            </div>
            {bunBottom}
        </div>
    )
}

export default OrderList

// OrderList.propTypes = {
//     data: data
// }