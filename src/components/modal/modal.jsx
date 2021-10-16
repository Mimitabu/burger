import React from "react";
import modalStyle from './modal.module.css';
import { CloseIcon }  from '../../index';
import OrderDetails from '../order-details/orderDetails';
import IngredientDetails from '../ingredient-details/ingredientDetails';

function Modal(props) {
    return (
        <div className={`${modalStyle.content} ${props.pStyle}`}>
            <div className={modalStyle.header}>
                <p className="text text_type_main-large">
                    {props.header}
                </p>
                <div className={modalStyle.close} onClick={props.closeModal} 
                style={props.closeStyle}>
                    <CloseIcon type="primary" />
                </div>
            </div>
            { props.modal === 'order' ?
            <OrderDetails closeStyle={props.closeStyle} /> :
            <IngredientDetails 
                imageLarge = {props.item.image_large}
                name = {props.item.name}
                calories = {props.item.calories}
                proteins = {props.item.proteins}
                fat = {props.item.fat}
                carbohydrates = {props.item.carbohydrates}
            />
            }
        </div>
    )
}

export default Modal