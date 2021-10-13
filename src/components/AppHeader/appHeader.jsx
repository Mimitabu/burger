import React from 'react';
import headerStyle from './appHeader.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '../../index';
import HeaderItem from '../headerItem/headerItem';

function AppHeader(){
    
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
                <HeaderItem text='Конструктор' styles='text_type_main-default'>
                    <BurgerIcon type="primary" />
                </HeaderItem>
                <HeaderItem text='Лента заказов' styles='text_type_main-default text_color_inactive'>
                    <ListIcon type="secondary" />
                </HeaderItem>
            </div>
            <div className={headerStyle.logo}>
            <Logo />
            </div>
            <HeaderItem text='Личный кабинет' styles='text_type_main-default text_color_inactive'>
                <ProfileIcon type="secondary" />
            </HeaderItem>
        </header>
    );
}

export default AppHeader