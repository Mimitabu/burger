import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter } from '../../../index';
import { useDrag } from "react-dnd";
import { useHistory } from 'react-router-dom';
import { ItemType } from "../../../services/reducers";


interface IngredientItemProps {
    item: ItemType
}

function IngredientItem({ item }: IngredientItemProps) {
    const history = useHistory();
    const [, dragRef] = useDrag({
        type: "ingredients",
        item: { item }
    });

    function openModal() {
        history.push({
            state: { background: { pathname: '/' } },
            pathname: `/ingredients/${item._id}`,
        });
    }

    return (
        <div ref={dragRef} className={ingredientStyle.container} onClick={openModal}>
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
    )
}

export default IngredientItem