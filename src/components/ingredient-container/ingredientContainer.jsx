import React from "react";
import containerStyle from './ingredientContainer.module.css';
import IngredientItem from "../ingredient-item/ingredientItem";

function IngredientContainer(props) {
    return (
        <div className='mt-10 mb-10'>
            <h3 className='text text_type_main-medium'>{props.text}</h3>
            <div className={`${containerStyle.ingredientContainer} mt-6 mb-10 ml-4 mr-1`}>
                {props.data.map((item) => (
                    <React.Fragment key={item._id}>
                        <IngredientItem  item = {item}/>
                    </React.Fragment>
                ))}
            </div>
    </div>
    )
}

export default IngredientContainer