import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter } from '../../index';
import { reqProp } from '../../utils/types';
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../../services/actions/item";

function IngredientItem({ item }) {
    const dispatch = useDispatch();

    function openModal() {
        dispatch({
            type: SHOW_MODAL,
            content: 'ingredients',
            currentIngredient: item

        })
    }

    return (
        <>
            <div className={ingredientStyle.container} onClick={openModal}>
                {
                    item.__v !== 0 &&
                    <Counter count={item.count} size="default" />
                }
                <img className={`${ingredientStyle.image} ml-4 mb-1 mr-4`} alt={item.name} src={item.image} />
                <div className={`${ingredientStyle.priceContainer} mb-1`}>
                    <span className='text text_type_digits-default mr-2'>{item.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${ingredientStyle.name} text text_type_main-default`}>
                    {item.name}
                </div>
            </div>
        </>
    )
}

export default IngredientItem

IngredientItem.propTypes = {
    item: reqProp.isRequired
}