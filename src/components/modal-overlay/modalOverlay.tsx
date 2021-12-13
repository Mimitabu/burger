import React from "react";
import overlayStyle from './modalOverlay.module.css';

interface ModalOverlayProps {
    children: React.ReactNode
    closeModal: ((...args: any[]) => any) | (() => void)
}

const ModalOverlay = (props: ModalOverlayProps) => {
    return (
        <div className={overlayStyle.container} onClick={props.closeModal} id={'overlay'}>
            {props.children}
        </div>
    )
}

export default ModalOverlay
