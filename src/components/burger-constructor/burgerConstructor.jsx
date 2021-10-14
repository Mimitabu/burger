import React from "react";
import PropTypes from 'prop-types';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderList from "../order-list/orderList";
import TotalBlock from "../total-block/totalBlock";
const { arrayOf, number, shape, string } = PropTypes;

function BurgerConstructor(props) {
    return (
        <section className={`${burgerConstructorStyle.section} pt-25 pl-4`}>
            <OrderList data={props.data} />
            <TotalBlock />
        </section>
    )
}

BurgerConstructor.propTypes = arrayOf(shape({
    _id: string.isRequired,
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string.isRequired,
    image_large: string,
    image_mobile: string,
    name: string.isRequired,
    price: number.isRequired,
    proteins: number,
    type: string.isRequired,
    __v: number.isRequired,
  }).isRequired).isRequired

export default BurgerConstructor