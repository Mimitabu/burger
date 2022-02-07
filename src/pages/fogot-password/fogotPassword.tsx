import React from "react";
import style from './fogotPassword.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { fogotPass } from "../../services/actions/auth";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "../../services/hooks";

export default function FogotPassPage() {
    const [value, setValue] = React.useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const { hasFogotPassReqSuccess, hasFogotPassReqFailed } = useSelector((store) =>
        store.register)

    const onLoginClick = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    const restoreClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value !== '') {
            dispatch(fogotPass(value));
            history.replace({ pathname: '/reset-password' });
        }
    }

    const { user } = useSelector((store) =>
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

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Восстановление пароля</h3>
                <form className={style.form} onSubmit={restoreClick}>
                    <Input
                        type={'email'}
                        placeholder={'Укажите E-mail'}
                        onChange={e => setValue(e.target.value)}
                        name={'email'}
                        value={value}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    {hasFogotPassReqFailed &&
                        <>
                            <span className="text text_type_main-default text_color_inactive mb-6">
                                Что-то не так, проверьте email, а лучше поспите
                            </span>
                            <div className='mb-6'></div>
                        </>
                    }
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