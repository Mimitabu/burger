import React from "react";
import modalIngredientStyle from './ingredientDetails.module.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootReducer } from "../../services/reducers";

function IngredientDetails() {
    let { id } = useParams<any>();
    const { items } = useSelector((store: RootReducer) =>
        store.ingredient)

    const item = items.filter(item => item._id === id)[0]
    if (!item) {
        return null;
    }

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
