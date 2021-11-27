import React, { useState } from "react";
import style from './login.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser, getUser } from "../../services/actions/auth";


export default function LoginPage() {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        email: '',
        password: ''
    });
    const onChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setState({
            ...state,
            [name]: value,
        })
    }
    const history = useHistory();
    const onRegisterClick = useCallback(
        () => {
            history.replace({ pathname: '/register' });
        },
        [history]
    );

    const onResetPassClick = useCallback(
        () => {
            history.replace({ pathname: '/fogot-password' });
        },
        [history]
    );

    const { hasReqAuthSuccess, hasReqAuthFailed } = useSelector(store =>
        store.register);

    let login = e => {
        e.preventDefault();
        dispatch(authUser(state.email, state.password))
        console.log('hasReqAuthSuccess', hasReqAuthSuccess)
        if (hasReqAuthSuccess) {
            history.replace({ pathname: '/' });
        }
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Вход</h3>
                <form className={style.form} onSubmit={login}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={onChange}
                        name={'email'}
                        value={state.email}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    <PasswordInput onChange={onChange} value={state.password} name={'password'} />
                    <div className='mb-6'></div>
                    {hasReqAuthFailed &&
                        <>
                            <span className="text text_type_main-default text_color_inactive">
                                Проверьте правильность введенного логина или пароля
                            </span>
                            <div className='mb-6'></div>
                        </>
                    }
                    <Button type="primary" size="small">
                        Войти
                    </Button>
                    <div className='mb-20'></div>
                </form>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
                    <Button type="secondary" size="medium" onClick={onRegisterClick}>
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
                    <Button type="secondary" size="medium" onClick={onResetPassClick}>
                        Восстановить пароль
                    </Button>
                </div>
            </div>
        </div>
    )
}