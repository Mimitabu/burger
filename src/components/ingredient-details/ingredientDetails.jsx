import React from "react";
import modalIngredientStyle from './ingredientDetails.module.css';

function IngredientDetails(props) {
    return (
    <div className={modalIngredientStyle.content}>
        <img src={props.imageLarge} className={`${modalIngredientStyle.modalImage} mb-4`} alt={props.name} />
            <span className="text text_type_main-medium mb-8">
                {props.name}
            </span>
            <div className={modalIngredientStyle.spansContainer}>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</span>
                    <span className="text text_type_digits-default text_color_inactive">{props.calories}</span>
                </div>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{props.proteins}</span>
                </div>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{props.fat}</span>
                </div>
                <div className={modalIngredientStyle.spans}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{props.carbohydrates}</span>
                </div>
            </div>
    </div>
    )
}

export default IngredientDetails