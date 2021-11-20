import React, { useRef } from "react";
import style from './fogotPassword.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fogotPageReduser } from "../../services/reducers/pages";
import { postEmail } from "../../services/actions/pages";



export default function FogotPassPage() {
    const [value, setValue] = React.useState('');
    const emailRef = React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const { hasRequestFailed } = useSelector(store =>
        store.fogotPassPage);
    const onLoginClick = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );
    const resetPass = (e) => {
        e.preventDefault();
        dispatch(postEmail(emailRef.current.value));
        if (!hasRequestFailed) {
            history.replace({ pathname: '/reset-password' });
        }
    }
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Регистрация</h3>
                <form className={style.form} onSubmit={resetPass}>
                    <Input
                        type={'email'}
                        placeholder={'Укажите E-mail'}
                        onChange={e => setValue(e.target.value)}
                        name={'email'}
                        value={value}
                        error={false}
                        ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    <Button type="primary" size="small">
                        Восстановить
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