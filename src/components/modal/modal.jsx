import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import modalStyle from './modal.module.css';
import { CloseIcon } from '../../index';
import ModalOverlay from "../modal-overlay/modalOverlay";

const modalElement = document.getElementById('react-modals');

function Modal(props) {

    const { closeModal } = props;

    function close(event) {
        if (event.target === document.getElementById('overlay')) {
            closeModal();
        }
    }

    const keyHandler = (event) => {
        if (event.keyCode === 27) {
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
            <div className={`${modalStyle.content} ${props.pStyle}`}>
                <div className={modalStyle.header}>
                    <p className="text text_type_main-large">
                        {props.header}
                    </p>
                    <div className={modalStyle.close} onClick={props.closeModal}
                        style={props.closeStyle}>
                        <CloseIcon type="primary" />
                    </div>
                </div>
                {props.children}
            </div>
        </ModalOverlay>,
        modalElement
    )
}

export default Modal

Modal.propTypes = {
    pStyle: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    closeStyle: PropTypes.shape({
        position: PropTypes.string.isRequired,
        top: PropTypes.string.isRequired,
        right: PropTypes.string.isRequired,
    }),
    children: PropTypes.node.isRequired
}