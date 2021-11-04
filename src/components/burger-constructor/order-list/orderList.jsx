import React, { useEffect, useMemo } from "react";
import { v4 as uuid_v4 } from "uuid";
import orderListStyle from './orderList.module.css';
import { ConstructorElement, DragIcon } from '../../../index';
import { data } from "../../../utils/types";
import { useDrop } from "react-dnd";
import { ADD_BUN_TO_ODER, REMOVE_FROM_ORDER } from "../../../services/actions/item";
import { useDispatch, useSelector } from "react-redux";

function getData(arr, type) {
    if (arr.length !== 0) {
        return arr.filter(function (el) {
            return el.type === type
        })
    } else {
        return null
    }
}

function getOther(arr, type) {
    if (arr.length !== 0) {
        return arr.filter(function (el) {
            return el.type !== type
        });
    } else {
        return null
    }
}

function OrderList(props) {
    const dispatch = useDispatch();

    const { buns } = useSelector(store =>
        store.ingredient
    )

    const moveItem = (item) => {
        if (buns.length === 0) {
            dispatch({
                type: ADD_BUN_TO_ODER,
                ...item
            })
        }

    };

    const [{ isHover }, dropTarget] = useDrop({
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
    return (
        <>
            <div ref={dropTarget} style={{ height: '50%' }}>
                {bunTop}
                {bunBottom}
            </div>


            {/* {
                false && (
                    <div className={`${orderListStyle.list} mb-10`}>
                        {bun.map((item, index) => (
                            <div key={index} className='ml-6' style={{ display: 'flex', width: "100%" }}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${item.name} (верх)`}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </div>
                        ))}

                        <div className={orderListStyle.orderContainer}>
                            {other.map((item, index) => (
                                <div key={index} className='mr-2'>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                </div>
                            ))}
                        </div>
                        {bun.map((item, index) => (
                            <div key={item._id} className='ml-6' style={{ display: 'flex', width: "100%" }}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${item.name} (низ)`}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </div>
                        ))}
                    </div>)
            } */}
        </>
    )
}

export default OrderList

OrderList.propTypes = {
    data: data
}