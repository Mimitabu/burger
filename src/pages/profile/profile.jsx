import React from "react";
import style from './profile.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInputCustom } from "./custom-input-email";
import { InputCustom } from "./custom-input";

const Tabs = () => {
    const [current, setCurrent] = React.useState('profile')
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab value="profile" active={current === 'profile'} onClick={setCurrent}>
                Профиль
            </Tab>
            <Tab value="history" active={current === 'history'} onClick={setCurrent}>
                История заказов
            </Tab>
            <Tab value="logOut" active={current === 'logOut'} onClick={setCurrent}>
                Выход
            </Tab>
        </div>
    )
}

const NameInput = () => {
    const [value, setValue] = React.useState('Марк')
    const onChange = e => {
        setValue(e.target.value)
    }
    return <InputCustom onChange={onChange} value={value} name={'name'} placeholder={'Имя'} type={'text'} />
}

const LoginInput = () => {
    const [value, setValue] = React.useState('mail@stellar.burgers')
    const onChange = e => {
        setValue(e.target.value)
    }
    return <EmailInputCustom onChange={onChange} value={value} name={'email'} placeholder={'Логин'} type={'email'} />
}

const PassInput = () => {
    const [value, setValue] = React.useState('secret')
    const onChange = e => {
        setValue(e.target.value)
    }
    return <InputCustom onChange={onChange} value={value} name={'pass'} placeholder={'Пароль'} type={'password'} />
}

export default function ProfilePage() {
    return (
        <div className={style.mainContainer}>
            <div className={style.tabsContainer}>
                <Tabs />
                <div className='mb-20'></div>
                <p className='text text_type_main-default text_color_inactive'>
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
            <form className={style.form}>
                <NameInput />
                <div className='mb-6'></div>
                <LoginInput />
                <div className='mb-6'></div>
                <PassInput />
            </form>
        </div>
    )
}