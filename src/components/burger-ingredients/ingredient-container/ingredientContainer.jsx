import React, { useRef } from "react";
import PropTypes from 'prop-types';
import containerStyle from './ingredientContainer.module.css';
import IngredientItem from '../ingredient-item/ingredientItem';
import { data } from "../../../utils/types";

function IngredientContainer({ data, type, text }) {
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

IngredientContainer.propTypes = {
    text: PropTypes.string.isRequired,
    data: data,
    type: PropTypes.string.isRequired
}