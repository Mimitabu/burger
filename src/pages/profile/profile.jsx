import React from "react";
import style from './profile.module.css';
import ProfileForm from "./profileForm";
import { NavLink } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileOrdersPage from "./profileOrders";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/auth";
import { useHistory } from 'react-router-dom';

export default function ProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { hasLogoutFailed } = useSelector(store =>
        store.register)

    const logoutClick = (event) => {
        event.preventDefault();
        dispatch(
            logout(() => {
                history.replace('/login')
            })
        )
    }

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
                    onClick={logoutClick}
                >
                    Выход
                </button>
                <div className='mb-20'></div>
                <p className='text text_type_main-default text_color_inactive'>
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
                {hasLogoutFailed &&
                    <>
                        <span className="text text_type_main-default text_color_inactive mt-6">
                            Не удалось выйти из профиля. Скорее всего налажал разработчик.
                            Глубоко вздохните, познайте сущности единство и бесконечность
                            черных дыр
                        </span>
                        <div className='mb-6'></div>
                    </>
                }
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