import React, { useMemo } from "react";
import { v4 as uuid_v4 } from "uuid";
import orderListStyle from './orderList.module.css';
import { ConstructorElement } from '../../../index';
import FillingContainer from "./filling-container/fillingContainer";
import { useDrop } from "react-dnd";
import {
    ADD_BUN_TO_ODER,
    ADD_INGREDIENT_TO_ORDER
} from "../../../services/actions/item";
import { useDispatch, useSelector } from "react-redux";


function OrderList() {
    const dispatch = useDispatch();

    const { buns, orderItems } = useSelector(store =>
        store.ingredient
    )

    function moveItem(item) {
        const { _id } = item.item
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

    const [, dropTarget] = useDrop({
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
                <div key={uuid_v4()} className='ml-6 order-item bun' style={{ display: 'flex', width: "100%" }}
                    order_id={item._id}>
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
                <div key={uuid_v4()} className='ml-6 order-item bun' style={{ display: 'flex', width: "100%" }}
                    order_id={item._id}>
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

    return (
        <div ref={dropTarget} className={`${orderListStyle.list} mb-10`}>
            {bunTop}
            <FillingContainer items={orderItems} />
            {bunBottom}
        </div>
    )
}

export default OrderList

// OrderList.propTypes = {
//     data: data
// }