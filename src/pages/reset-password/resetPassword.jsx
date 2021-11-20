import React from "react";
import style from './resetPassword.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";

function CodeInput() {
    const [value, setValue] = React.useState('')
    const emailRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => emailRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setValue(e.target.value)}
            name={'email'}
            value={value}
            error={false}
            ref={emailRef}
            errorText={'Ошибка'}
            size={'default'}
        />
    )
}


function PassInput() {
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return <PasswordInput onChange={onChange} value={value}
        name={'password'} placeholder={'Введите новый пароль'} />
}

export default function ResetPasswordPage() {
    const history = useHistory();
    const onLoginClick = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Регистрация</h3>
                <form className={style.form}>
                    <PassInput />
                    <div className='mb-6'></div>
                    <CodeInput />
                    <div className='mb-6'></div>
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