import React from "react";
import style from './login.module.css';
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
            placeholder={'E-mail'}
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
    return <PasswordInput onChange={onChange} value={value} name={'password'} />
}

export default function LoginPage() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Вход</h3>
                <form className={style.form}>
                    <EmailInput />
                    <div className='mb-6'></div>
                    <PassInput />
                    <div className='mb-6'></div>
                    <Button type="primary" size="small">
                        Войти
                    </Button>
                    <div className='mb-20'></div>
                </form>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
                    <Button type="secondary" size="medium">
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
                    <Button type="secondary" size="medium">
                        Восстановить пароль
                    </Button>
                </div>
            </div>
        </div>
    )
}