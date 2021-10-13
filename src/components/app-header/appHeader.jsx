import React from 'react';
import headerStyle from './appHeader.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '../../index';
import HeaderItem from '../header-item/headerItem';

function AppHeader(){
    
    return (
        <header className={`${headerStyle.header} mt-10`}>
            <nav className={headerStyle.container}>
                <HeaderItem text='Конструктор' styles='text_type_main-default'>
                    <BurgerIcon type="primary" />
                </HeaderItem>
                <HeaderItem text='Лента заказов' styles='text_type_main-default text_color_inactive'>
                    <ListIcon type="secondary" />
                </HeaderItem>
            </nav>
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