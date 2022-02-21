import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import modalStyle from './modal.module.css';
import { CloseIcon } from '../../index';
import ModalOverlay from "../modal-overlay/modalOverlay";

const modalElement = document.getElementById('react-modals');

interface CloseStyle {
    position: 'absolute' | 'static'
    top: string
    right: string
}

interface ModalProps {
    pStyle: string
    header: string
    closeModal: ((...args: any[]) => any) | (() => void)
    closeStyle?: CloseStyle | undefined
    children: React.ReactNode
}

function Modal(props: ModalProps) {

    const { closeModal } = props;

    function close(event: React.MouseEvent) {
        if (event.target === document.getElementById('overlay')) {
            closeModal();
        }
    }

    const keyHandler = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ReactDOM.createPortal(
        <ModalOverlay closeModal={close}>
            <div className={`${modalStyle.content} ${props.pStyle}`} id='modal'>
                <div className={modalStyle.header}>
                    <p className="text text_type_main-large">
                        {props.header}
                    </p>
                    <div className={modalStyle.close} onClick={props.closeModal}
                        style={props.closeStyle} id='modalClose'>
                        <CloseIcon type="primary" />
                    </div>
                </div>
                {props.children}
            </div>
        </ModalOverlay>,
        modalElement!
    )
}

export default Modal