import React from "react";
import { CurrencyIcon, Button } from '../../index';
import totalBlockStyle from './totalBlock.module.css';
import ModalOverlay from '../modal-overlay/modalOverlay';


function TotalBlock() {
    const [state, setState] = React.useState(false);

    function openModal() {
        setState(true)
    }

    function closeModal() {
        setState(false)
    }

    return (
        <>
        <div className={totalBlockStyle.container}>
                <span className="text text_type_digits-medium mr-2">600</span>
                <CurrencyIcon type="primary" />
                <div className='ml-10'></div>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>

            {
                state && 
                <ModalOverlay 
                pStyle ='pt-30 pr-25 pb-30 pl-25'
                header = ''
                modal = 'order'
                closeModal = {closeModal}
                closeStyle = {{position: "absolute", top: "60px", right: "40px"}}
                />
            }
        </>

    )
}

export default TotalBlock