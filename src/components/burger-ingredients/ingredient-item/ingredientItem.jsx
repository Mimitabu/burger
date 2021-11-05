import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter } from '../../../index';
import { reqProp } from '../../../utils/types';
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../../../services/actions/item";
import { useDrag } from "react-dnd";

function IngredientItem({ item }) {
    const dispatch = useDispatch();
    const { _id } = item;
    const { type } = item;

    const dragHandler = (e) => {
        // console.log('{_id}', { _id });
        // console.log('type', { type });
    }

    const [{ didDrop }, dragRef] = useDrag({
        type: "ingredients",
        item: { _id },
        property: { type },
        collect: monitor => ({
            didDrop: monitor.didDrop()
        })
    });

    function openModal() {
        dispatch({
            type: SHOW_MODAL,
            content: 'ingredients',
            currentIngredient: item

        })
    }

    return (
        <>
            <div ref={dragRef} className={ingredientStyle.container} onClick={openModal} onDrag={dragHandler}>
                {
                    item.__v !== 0 &&
                    <Counter count={item.__v} size="default" />
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