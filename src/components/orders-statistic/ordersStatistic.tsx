import React from "react";
import style from './ordersStatistic.module.css';

export default function OrdersStatistic() {

    const ready = ['034533', '034533', '034533', '034533', '034533', '034533'];
    const inProgress = ['034538', '034538', '034538'];

    return (
        <div className={style.container}>
            <div className={style.list}>
                <div className="mr-9">
                    <h4 className="text text_type_main-medium mb-6">Готовы:</h4>
                    {ready.map((number) =>
                        <li key={number}
                            className={`${style.color} text text_type_digits-default mb-2`}>
                            {number}
                        </li>
                    )}
                </div>
                <div className={style.inProgress}>
                    <h4 className="text text_type_main-medium mb-6">В работе:</h4>
                    {inProgress.map((number) =>
                        <li key={number}
                            className={`${style.liProgress} text text_type_digits-default mb-2`}>
                            {number}
                        </li>
                    )}
                </div>
            </div>
            <div className="mb-15">
                <p className="text text_type_main-medium">
                    Выполнено за все время:
                </p>
                <div className={`${style.colorNum} text text_type_digits-large`}>28 752</div>
            </div>
            <div>
                <p className="text text_type_main-medium">
                    Выполнено за сегодня:
                </p>
                <div className={`${style.colorNum} text text_type_digits-large`}>138</div>
            </div>
        </div>
    )
}