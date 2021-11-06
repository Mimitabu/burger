import React from "react";
import style from './fillingContainer.module.css';
import FillingItem from "./filling-item/fillingItem";
import { data } from '../../../../utils/types'

function FillingContainer({ items }) {

    return (
        <div className={style.orderContainer} >
            {items.map((item, index) => (
                <FillingItem key={item._key} item={item} index={index} />
            ))}
        </div>
    )
}

export default FillingContainer

FillingContainer.propTypes = {
    items: data
}