import React from 'react';
import headerStyle from './appHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '../../index';
import HeaderItem from './header-item/headerItem';
import { useHistory } from 'react-router';

function AppHeader() {
    const history = useHistory();
    const openProfile = (e) => {
        history.replace({ pathname: '/profile' })
    }
    const openConstructor = (e) => {
        history.replace({ pathname: '/' })
    }
    return (
        <header className={`${headerStyle.header} mt-10`}>
            <nav className={headerStyle.container}>
                <HeaderItem
                    text='Конструктор'
                    styles='text_type_main-default text_color_inactive'
                    clickFunc={openConstructor}
                >
                    <BurgerIcon type="primary" />
                </HeaderItem>
                <HeaderItem text='Лента заказов' styles='text_type_main-default text_color_inactive'>
                    <ListIcon type="secondary" />
                </HeaderItem>
            </nav>
            <div className={headerStyle.logo}>
                <Logo />
            </div>
            <HeaderItem
                text='Личный кабинет'
                styles='text_type_main-default text_color_inactive profile'
                clickFunc={openProfile}
            >
                <ProfileIcon type="secondary" />
            </HeaderItem>
        </header>
    );
}

export default AppHeader