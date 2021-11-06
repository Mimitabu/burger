import React from "react";
import { CurrencyIcon, Button } from '../../../index';
import totalBlockStyle from './totalBlock.module.css';
import { useDispatch, useSelector } from "react-redux";
import { totalPriceSelector } from "../../../utils/selector";
import { SHOW_MODAL } from "../../../services/actions/item";
import { postOrder } from '../../../services/actions/item';


function TotalBlock() {
    const dispatch = useDispatch();
    const totalPrice = useSelector(totalPriceSelector);
    const hasRequestOrderFailed = useSelector(store =>
        store.order.hasRequestOrderFailed)

    function postOrderCall() {
        let order = [];
        const orderArr = Array.from(document.querySelectorAll('.order-item'));
        const bun = document.querySelector('.bun');
        orderArr.forEach((item) => {
            order.push(item.getAttribute('order_id'));
        })
        if (orderArr && bun) {
            dispatch(postOrder(order));
        }
        if (!hasRequestOrderFailed) {
            openModal()
        }
    }



    function openModal() {
        dispatch({
            type: SHOW_MODAL,
            content: null,
            currentItem: {}
        })
    }

    return (
        <>
            <div className={totalBlockStyle.container}>
                <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
                <CurrencyIcon type="primary" />
                <div className='ml-10'></div>
                <Button type="primary" size="medium" onClick={postOrderCall}>
                    Оформить заказ
                </Button>
            </div>
        </>
    )
}

export default TotalBlock