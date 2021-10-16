import React from 'react';
import PropTypes from 'prop-types';
import headerItemStyle from './headerItem.module.css';

function HeaderItem(props) {
    return (
        <div className={`${headerItemStyle.container} pt-4 pb-4 pr-5 pl-5 mt-4 mb-4 ml-5 mr-2`}>
            {props.children}
            <div className={`text ml-2 ${props.styles}`}>{props.text}</div>
        </div>
    );
}

export default HeaderItem

HeaderItem.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}