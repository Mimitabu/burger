import React from "react";
import style from './fogotPassword.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";

function EmailInput() {
    const [value, setValue] = React.useState('')
    const emailRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => emailRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
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
    )
}

export default function FogotPassPage() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Регистрация</h3>
                <form className={style.form}>
                    <EmailInput />
                    <div className='mb-6'></div>
                    <Button type="primary" size="small">
                        Восстановить
                    </Button>
                    <div className='mb-20'></div>
                </form>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
                    <Button type="secondary" size="medium">
                        Войти
                    </Button>
                </div>

            </div>
        </div>
    )
}