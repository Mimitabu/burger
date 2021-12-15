import React, { useRef } from "react";
import containerStyle from './ingredientContainer.module.css';
import IngredientItem from '../ingredient-item/ingredientItem';
import { ItemType } from "../../../utils/ts-types";


interface IngredientContainerProps {
    data: ItemType[]
    type: string
    text: string
}

function IngredientContainer({ data, type, text }: IngredientContainerProps) {
    const ref = useRef(null);

    return (
        <div className='mt-10 mb-10' id={type} ref={ref}>
            <h3 className='text text_type_main-medium'>{text}</h3>
            <div className={`${containerStyle.ingredientContainer} mt-6 mb-10 ml-4 mr-1`}>
                {data.map((item) => (
                    <React.Fragment key={item._id}>
                        <IngredientItem item={item} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default IngredientContainer