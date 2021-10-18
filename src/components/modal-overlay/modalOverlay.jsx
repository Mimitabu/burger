import React from "react";
import PropTypes from 'prop-types';
import overlayStyle from './modalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
        <div className={overlayStyle.container} onClick={props.closeModal} id={'overlay'}>
            {/* <Modal
                pStyle={props.pStyle}
                header={props.header}
                modal={props.modal}
                closeModal={props.closeModal}
                item={props.item}
                closeStyle={props.closeStyle}
            /> */}
            {props.children}
        </div>
    )
}

export default ModalOverlay

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired
}