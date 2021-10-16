import React from "react";
import PropTypes from 'prop-types';
import modalStyle from './modal.module.css';
import { CloseIcon } from '../../index';
import OrderDetails from '../order-details/orderDetails';
import IngredientDetails from '../ingredient-details/ingredientDetails';
import { reqPropVariate } from '../../utils/types'

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
            {props.modal === 'order' ?
                <OrderDetails closeStyle={props.closeStyle} /> :
                <IngredientDetails
                    item={props.item}
                />
            }
        </div>
    )
}

export default Modal

Modal.propTypes = {
    pStyle: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    modal: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    item: reqPropVariate,
    closeStyle: PropTypes.shape({
        position: PropTypes.string.isRequired,
        top: PropTypes.string.isRequired,
        right: PropTypes.string.isRequired,
    })
}