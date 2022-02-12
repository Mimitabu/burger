import React from "react";
import { CurrencyIcon, Button } from '../../../index';
import totalBlockStyle from './totalBlock.module.css';
import { totalPriceSelector } from "../../../utils/selector";
import { SHOW_MODAL } from "../../../services/actions/item";
import { postOrder } from '../../../services/actions/item';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "../../../services/hooks";

function TotalBlock() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { orderItems } = useSelector((store) =>
        store.ingredient);
    const { buns } = useSelector((store) =>
        store.ingredient);

    const totalPrice = useSelector(totalPriceSelector);
    const hasRequestOrderFailed = useSelector((store) =>
        store.order.hasRequestOrderFailed)

    const { user } = useSelector((store) =>
        store.register);

    function postOrderCall() {
        let order: any[] = [];
        orderItems.forEach((item) => {
            order.push(item._id);

        })
        buns.forEach((item) => {
            order.push(item._id);

        })
        if (orderItems.length > 0 && buns.length > 0) {
            if (user.email !== '' && user.name !== '') {
                dispatch(postOrder(order));
                if (!hasRequestOrderFailed) {
                    openModal()
                }
            } else {
                history.replace({ pathname: '/login' });
            }

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
        <div className={totalBlockStyle.container}>
            <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
            <CurrencyIcon type="primary" />
            <div className='ml-10'></div>
            <Button type="primary" size="medium" onClick={postOrderCall}>
                Оформить заказ
            </Button>
        </div>
    )
}

export default TotalBlock