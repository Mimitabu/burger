import React from "react";
import { CurrencyIcon, Button } from '../../../index';
import totalBlockStyle from './totalBlock.module.css';
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../../../services/actions/item";


function TotalBlock() {
    const dispatch = useDispatch();

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
                <span className="text text_type_digits-medium mr-2">600</span>
                <CurrencyIcon type="primary" />
                <div className='ml-10'></div>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
        </>
    )
}

export default TotalBlock