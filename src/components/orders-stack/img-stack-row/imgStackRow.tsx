import React from "react";
import { ItemType } from "../../../utils/ts-types";
import style from './imgStackRow.module.css';

export default function ImgStackRow({ bun, orderItems }: { bun: (ItemType | undefined)[], orderItems: (ItemType | undefined)[] }) {
    const bunElement = bun![0];
    const itemsElement = orderItems!.slice(0, 3);

    const lastElement = orderItems![4] ? orderItems![4] : null;
    const count = orderItems!.slice(5, orderItems!.length).length;
    return (
        <div className={style.parentContainer}>
            {bunElement && (
                <div className={style.imageContainer}
                    style={{
                        transform: `translate(0px, 0px)`,
                        zIndex: 99
                    }}>
                    <div
                        className={style.image}
                        style={{
                            backgroundImage: `url(${bunElement.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    />
                </div>
            )}
            {itemsElement.map((element, index) => {
                return (
                    <div className={style.imageContainer}
                        style={{
                            transform: `translate(${-(index + 1) * 15}px, 0px)`,
                            zIndex: 99 - (index + 1)
                        }}>
                        <div
                            key={index}
                            className={style.image}
                            style={{
                                backgroundImage: `url(${element?.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }}
                        />
                    </div>
                );
            })}
            {lastElement && count !== 0 && (
                <div
                    className={style.image_last}
                    style={{
                        backgroundImage: `url(${lastElement.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className={style.background}>
                        <span className={`${style.span} text text_type_digits-default`}>{`+${count}`}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
