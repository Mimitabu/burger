import React from "react";
import { CurrencyIcon, Button } from '../../index';
import totalBlockStyle from './totalBlock.module.css';


function TotalBlock(props) {
    return (
        <div className={totalBlockStyle.container}>
            <span className="text text_type_digits-medium mr-2">600</span>
            <CurrencyIcon type="primary" />
            <div className='ml-10'></div>
            <Button type="primary" size="medium">
                Оформить заказ
            </Button>
        </div>
    )
}

export default TotalBlock