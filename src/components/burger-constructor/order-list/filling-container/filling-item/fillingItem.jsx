import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '../../../../../index';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
    REMOVE_FROM_ORDER,
    MOVE_ITEM_IN_ORDER
} from "../../../../../services/actions/item";
import { reqProp } from '../../../../../utils/types';

export default function FillingItem({ item, index }) {
    const ref = useRef(null);
    let { _id } = item;
    const dispatch = useDispatch();

    const removeItem = (_id, index) => {
        dispatch({
            type: REMOVE_FROM_ORDER,
            _id,
            index
        })
    }

    const [, drop] = useDrop({
        accept: 'filling',
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch({
                type: MOVE_ITEM_IN_ORDER,
                dragIndex,
                hoverIndex
            });
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'filling',
        item: () => {
            return { _id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div className='mr-2' ref={ref} style={{ opacity }}>
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

FillingItem.propTypes = {
    item: reqProp.isRequired,
    index: PropTypes.number.isRequired
}