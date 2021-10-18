import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import overlayStyle from './modalOverlay.module.css';
import Modal from '../modal/modal';
import { reqProp } from '../../utils/types';

const modalElement = document.getElementById('react-modals');

const ModalOverlay = (props) => {
    const { closeModal } = props;
    const modalRef = useRef(null);

    function close(event) {
        if (event.target === modalRef.current) {
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
        <div className={overlayStyle.container} ref={modalRef} onClick={close}>
            <Modal
                pStyle={props.pStyle}
                header={props.header}
                modal={props.modal}
                closeModal={props.closeModal}
                item={props.item}
                closeStyle={props.closeStyle}
            />
        </div>
        ,
        modalElement
    )
}

export default ModalOverlay

ModalOverlay.propTypes = {
    pStyle: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    modal: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    item: reqProp,
    closeStyle: PropTypes.shape({
        position: PropTypes.string.isRequired,
        top: PropTypes.string.isRequired,
        right: PropTypes.string.isRequired,
    })
}
