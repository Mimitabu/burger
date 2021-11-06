import React from "react";
import PropTypes from 'prop-types';
import style from './fillingContainer.module.css';
import FillingItem from "./filling-item/fillingItem";

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

//дописать вонючие проптайпс