import React from "react";
import style from './profile.module.css';
import ProfileForm from "./profileForm";
import { NavLink } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileOrdersPage from "./profileOrders";

export default function ProfilePage() {
    return (
        <div className={style.mainContainer}>
            <div className={style.tabsContainer}>
                <NavLink to='/profile' exact
                    className={`${style.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={style.linkActive}
                >
                    Профиль
                </NavLink>
                <NavLink to='/profile/orders'
                    className={`${style.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={style.linkActive}
                >
                    История заказов
                </NavLink>
                <button
                    className={`${style.button} text text_type_main-medium text_color_inactive`}
                // onClick={ }
                >
                    Выход
                </button>
                <div className='mb-20'></div>
                <p className='text text_type_main-default text_color_inactive'>
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
            <Switch>
                <Route exact path="/profile">
                    <ProfileForm />
                </Route>
                <Route exact path="/profile/orders">
                    <ProfileOrdersPage />
                </Route>
            </Switch>
        </div>
    )
}