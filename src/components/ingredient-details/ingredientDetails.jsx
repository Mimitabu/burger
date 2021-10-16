import React from "react";
import modalIngredientStyle from './ingredientDetails.module.css';
import { reqProp } from '../../utils/types'

function IngredientDetails({item}) {
    return (
    <div className={modalIngredientStyle.content}>
        <img src={item.image_large} className={`${modalIngredientStyle.modalImage} mb-4`} alt={item.name} />
            <span className="text text_type_main-medium mb-8">
                {item.name}
            </span>
            <div className={modalIngredientStyle.spansContainer}>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.calories}</span>
                </div>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.proteins}</span>
                </div>
                <div className={`${modalIngredientStyle.spans} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.fat}</span>
                </div>
                <div className={modalIngredientStyle.spans}>
                    <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</span>
                </div>
            </div>
    </div>
    )
}

export default IngredientDetails

IngredientDetails.propTypes = {
    item: reqProp
}