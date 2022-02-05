import React from "react";
import style from './resetPassword.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { resetPass } from "../../services/actions/auth";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "../../services/hooks";

export default function ResetPasswordPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { hasResetPassReqSuccess, hasResetPassReqFailed } = useSelector((store) =>
        store.register)

    const [state, setState] = React.useState({
        password: '',
        token: ''
    });
    const onLoginClick = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name
        setState({
            ...state,
            [name]: value,
        })
    }

    const resetClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.password !== '' && state.token !== '') {
            dispatch(
                resetPass(state.password, state.token)
            )
            if (hasResetPassReqSuccess) {
                history.replace({ pathname: '/login' });
            }
        }
    }

    const { user, hasFogotPassReqSuccess } = useSelector((store) =>
        store.register)

    if (user.email !== '' && user.name !== '') {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }

    if (!hasFogotPassReqSuccess) {
        return (
            <Redirect
                to={{
                    pathname: '/fogot-password'
                }}
            />
        );
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Восстановление пароля</h3>
                <form className={style.form} onSubmit={resetClick}>
                    <PasswordInput onChange={onChange} value={state.password}
                        name={'password'} />
                    <div className='mb-6'></div>
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onChange}
                        name={'token'}
                        value={state.token}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    {hasResetPassReqFailed &&
                        <>
                            <span className="text text_type_main-default text_color_inactive mb-6">
                                Что-то не так, проверьте email, а лучше поспите
                            </span>
                            <div className='mb-6'></div>
                        </>
                    }
                    <Button type="primary" size="small">
                        Сохранить
                    </Button>
                    <div className='mb-20'></div>
                </form>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
                    <Button type="secondary" size="medium" onClick={onLoginClick}>
                        Войти
                    </Button>
                </div>

            </div>
        </div>
    )
}