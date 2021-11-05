import React from "react";
import { v4 as uuid_v4 } from "uuid";
import { ConstructorElement, DragIcon } from '../../../../../index';
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import {
    REMOVE_FROM_ORDER
} from "../../../../../services/actions/item";

export default function FillingItem({ item, index }) {
    let { _id } = item;
    const dispatch = useDispatch();

    const removeItem = (_id, index) => {
        dispatch({
            type: REMOVE_FROM_ORDER,
            _id,
            index
        })
    }

    const [, dragTarget] = useDrag({
        type: 'filling',
        item: { _id }
    })

    return (
        <div key={uuid_v4()} className='mr-2' ref={dragTarget}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => { removeItem(item._id, index) }}
            />
        </div>


    )
}

//тут вонючие проптайпы