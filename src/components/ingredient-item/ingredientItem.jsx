import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter }  from '../../index';
import ModalOverlay from "../modal-overlay/modalOverlay";

function IngredientItem( {item} ) {
    const [state, setState] = React.useState(false);

    function openModal() {
        setState(true)
    }

    function closeModal() {
        setState(false)
    }

    return(
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

        {
            state && 
                <ModalOverlay 
                pStyle ='pt-10 pr-10 pb-15 pl-10'
                header = 'Детали ингредиента'
                modal = 'ingredient'
                closeModal = {closeModal}
                item = { item }
                />
            }
        </>       
    )
} 
    


export default IngredientItem