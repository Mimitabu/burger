import React from "react";
import ReactDOM from "react-dom";
import { useRef, useEffect } from 'react';
import overlayStyle from './modalOverlay.module.css';
import Modal from '../modal/modal';

const modalElement = document.getElementById('react-modals');

const ModalOverlay = (props) => {

    const { closeModal } = props;
    const modalRef = useRef(null);

    function close(event) {
        if (event.target === modalRef.current) {
            closeModal();
        }
    }

    useEffect(() => {
        modalRef.current.focus();
    }, [])

    function keyHandler(event) {
        console.log(event)
    }

    return ReactDOM.createPortal(
            <div className={overlayStyle.container} ref={modalRef} onClick={close} onKeyPress={(e) => keyHandler(e)}>
                <Modal 
                pStyle = {props.pStyle} 
                header = {props.header}
                modal = {props.modal} 
                closeModal = {props.closeModal} 
                item = {props.item}
                closeStyle = {props.closeStyle}
                />
            </div>
        ,
        modalElement
    )
}

export default ModalOverlay
