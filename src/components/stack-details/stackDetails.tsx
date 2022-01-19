import React from "react";
import style from './stackDetails.module.css';

export default function SatckDetails() {
    return (
        <div className={style.container}>
            <p className="text text_type_digits-default mb-10">
                #034533
            </p>
            <h4 className="text text_type_main-medium mb-3">
                Black Hole Singularity острый бургер
            </h4>
            <p className={`${style.colorText} text text_type_main-small mb-15`}>
                Выполнен
            </p>
            <p className="text text_type_main-medium mb-6">
                Состав:
            </p>
        </div>
    )
}