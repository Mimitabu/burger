import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter }  from '../../index';

function IngredientItem(props) {
    return(
        <div className={ingredientStyle.container}>
            {
                props.count &&
                    <Counter count={props.count} size="default" />
            }
            <img className={`${ingredientStyle.image} ml-4 mb-1 mr-4`} alt={props.name} src={props.image} />
            <div className={`${ingredientStyle.priceContainer} mb-1`}>
                <span className='text text_type_digits-default mr-2'>{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${ingredientStyle.name} text text_type_main-default`}>
                {props.name}
            </div>
        </div>       
    )
} 
    


export default IngredientItem