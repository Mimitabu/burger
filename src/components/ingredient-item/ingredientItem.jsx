import React from "react";
import ingredientStyle from './ingredientItem.module.css';
import { CurrencyIcon, Counter, CloseIcon }  from '../../index';

function IngredientItem(props) {
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
                props.count !==0 &&
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

        {
            state && 
                <div className={ingredientStyle.modalContainer}>
                    <div className={`${ingredientStyle.modalContent} pt-10 pl-10 pb-15 pr-10`}>
                        <div className={ingredientStyle.modalHeader}>
                            <p className="text text_type_main-large">
                                Детали ингредиента
                            </p>
                            <div className={ingredientStyle.close} onClick={closeModal}>
                                <CloseIcon type="primary" />
                            </div>
                        </div>
                        <img src={props.imageLarge} className={`${ingredientStyle.modalImage} mb-4`} alt={props.name} />
                        <span className="text text_type_main-medium mb-8">
                            {props.name}
                        </span>
                        <div className={ingredientStyle.spansContainer}>
                            <div className={`${ingredientStyle.spans} mr-5`}>
                                <span className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</span>
                                <span className="text text_type_digits-default text_color_inactive">{props.calories}</span>
                            </div>
                            <div className={`${ingredientStyle.spans} mr-5`}>
                                <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
                                <span className="text text_type_digits-default text_color_inactive">{props.proteins}</span>
                            </div>
                            <div className={`${ingredientStyle.spans} mr-5`}>
                                <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
                                <span className="text text_type_digits-default text_color_inactive">{props.fat}</span>
                            </div>
                            <div className={ingredientStyle.spans}>
                                <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
                                <span className="text text_type_digits-default text_color_inactive">{props.carbohydrates}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>       
    )
} 
    


export default IngredientItem