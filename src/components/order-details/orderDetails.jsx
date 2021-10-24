import React from "react";
import orderDetailsStyle from './orderDetails.module.css';
import image from '../../images/done.png';

function OrderDetails() {
    return (
        <div className={orderDetailsStyle.container}>
            <div className={`${orderDetailsStyle.text} text text_type_digits-large mb-8`}>
                034536
            </div>
            <span className="text text_type_main-medium mb-15">
                идентификатор заказа
            </span>
            <img src={image} className={`${orderDetailsStyle.image} mb-15`} alt='check' />
            <span className="text text_type_main-default mb-2">
                Ваш заказ начали готовить
            </span>
            <span className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </span>
        </div>
    )
}

export default OrderDetails