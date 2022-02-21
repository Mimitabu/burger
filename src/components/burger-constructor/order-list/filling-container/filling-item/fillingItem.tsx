import React, { useRef } from "react";
import { ConstructorElement, DragIcon } from '../../../../../index';
import { useDrag, useDrop } from "react-dnd";
import {
    REMOVE_FROM_ORDER,
    MOVE_ITEM_IN_ORDER
} from "../../../../../services/actions/item";
import { ItemType } from "../../../../../utils/ts-types";
import { useDispatch } from "../../../../../services/hooks";



interface ItemTypeWhithIndex {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    index: number
}

interface FillingItemProps {
    item: ItemType
    index: number
    _key?: string
}

export default function FillingItem({ item, index, _key }: FillingItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const removeItem = (_id: string, index: number, _key: string) => {
        dispatch({
            type: REMOVE_FROM_ORDER,
            _id,
            index,
            _key
        })
    }

    const [, drop] = useDrop({
        accept: 'filling',
        hover: (item: ItemTypeWhithIndex, monitor: any) => {
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
            return { item, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div className='mr-2 order-item' ref={ref} style={{ opacity }}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => { removeItem(item._id, index, item._key) }}
            />
        </div>
    )
}