import React from "react";
import { CurrencyIcon, Button, CloseIcon } from '../../index';
import image from '../../images/done.png';
import totalBlockStyle from './totalBlock.module.css';


function TotalBlock(props) {
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
                <div className={totalBlockStyle.modalContainer}>
                    <div className={`${totalBlockStyle.modalContent} pt-30 pl-25 pb-30 pr-25`}>
                        <div className={totalBlockStyle.close} onClick={closeModal}>
                            <CloseIcon type="primary" />
                        </div>
                        <div className={`${totalBlockStyle.text} text text_type_digits-large mb-8`}>
                            034536
                        </div>
                        <span className="text text_type_main-medium mb-15">
                            идентификатор заказа
                        </span>
                        <img src={image} className={`${totalBlockStyle.image} mb-15`} alt='check' />
                        <span className="text text_type_main-default mb-2">
                            Ваш заказ начали готовить
                        </span>
                        <span className="text text_type_main-default text_color_inactive">
                            Дождитесь готовности на орбитальной станции
                        </span>
                    </div>
                </div>
            }
        </>

    )
}

export default TotalBlock