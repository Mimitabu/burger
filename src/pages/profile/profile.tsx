import React from "react";
import style from './profile.module.css';
import ProfileForm from "./profile-form/profileForm";
import { NavLink } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileOrdersPage from "./profile-orders/profileOrders";
import { logout } from "../../services/actions/auth";
import { useHistory } from 'react-router-dom';
import { ProtectedRoute } from "../../components/protected-route";
import StackDetails from "../../components/stack-details/stackDetails";
import { useDispatch, useSelector } from "../../services/hooks";

export default function ProfilePage() {
    const id = window.location.pathname.split('orders/')[1]

    const dispatch = useDispatch();
    const history = useHistory();

    const { hasLogoutFailed } = useSelector((store) =>
        store.register)

    const logoutClick = () => {
        dispatch(
            logout(() => {
                history.replace('/login')
            })
        )
    }
    let showIndex = true;

    if (window.location.pathname.includes(`/profile/orders/${id}`) &&
        history.length <= 2) {
        showIndex = false;
    }

    return (
        <div className={style.mainContainer}>
            {
                showIndex && <div className={style.tabsContainer}>
                    <NavLink to='/profile' exact
                        className={`${style.link} text text_type_main-medium text_color_inactive`}
                        activeClassName={style.linkActive}
                    >
                        Профиль
                    </NavLink>
                    <NavLink to='/profile/orders'
                        className={`${style.link} text text_type_main-medium text_color_inactive`}
                        activeClassName={style.linkActive}
                        onClick={() => { showIndex = true }}
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
            }

            <Switch>
                <Route exact path="/profile">
                    <ProfileForm />
                </Route>
                <Route exact path="/profile/orders">
                    <ProfileOrdersPage />
                </Route>
                <ProtectedRoute exact path='/profile/orders/:id'>
                    <StackDetails />
                </ProtectedRoute>
            </Switch>
        </div>
    )
}