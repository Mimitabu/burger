import React from "react";
import PropTypes from 'prop-types';
import style from './fillingContainer.module.css';
import FillingItem from "./filling-item/fillingItem";
import { v4 as uuid_v4 } from "uuid";

function FillingContainer({ items }) {
    return (
        <div className={style.orderContainer} >
            {items.map((item, index) => (
                <React.Fragment key={uuid_v4()}>
                    <FillingItem item={item} index={index} />
                </React.Fragment>
            ))}
        </div>
    )
}

export default FillingContainer

//дописать вонючие проптайпс