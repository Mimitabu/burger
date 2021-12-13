import React from 'react';
import headerItemStyle from './headerItem.module.css';

interface HeaderItemProps {
    clickFunc?: (e: any) => void | undefined
    children: React.ReactNode
    styles: string
    text: string
}

function HeaderItem({ clickFunc, children, styles, text }: HeaderItemProps) {
    return (
        <button className={`${headerItemStyle.container} pt-4 pb-4 pr-5 pl-5 mt-4 mb-4 ml-5 mr-2`}
            onClick={clickFunc}>
            {children}
            <div className={`text ml-2 ${styles}`}>{text}</div>
        </button>
    );
}

export default HeaderItem
