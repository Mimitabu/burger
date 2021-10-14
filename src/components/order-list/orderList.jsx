import React from "react";
import orderListStyle from './orderList.module.css';
import {ConstructorElement, DragIcon} from '../../index';

function getData(arr, type) {
    return arr.filter(function (el) {
       return el.type === type
     });
}

function getOther(arr, type) {
    return arr.filter(function (el) {
       return el.type !== type
     });
}
    
function OrderList(props) {
    const bun = getData(props.data, 'bun');
    const other = getOther(props.data, 'bun');

    return (
        <div className={orderListStyle.list} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
            {bun.map((item) => (
                <div key={item._id} className='ml-6' style={{display: 'flex', width: "100%"}}>
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    />
                </div>
            ))}
            
            <div className={orderListStyle.orderContainer}>
                {other.map((item) => (
                    <div key={item._id} className='mr-2'>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                ))}
            </div>
            {bun.map((item) => (
                <div key={item._id} className='ml-6' style={{display: 'flex', width: "100%"}}>
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    />
                </div>
            ))}
        </div>
    )
}

export default OrderList