import React from "react";
import PropTypes from 'prop-types';
import overlayStyle from './modalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
        <div className={overlayStyle.container} onClick={props.closeModal} id={'overlay'}>
            {props.children}
        </div>
    )
}

export default ModalOverlay

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired
}