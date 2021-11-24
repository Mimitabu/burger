import React from "react";
import { EmailInputCustom } from "./custom-input-email";
import { InputCustom } from "./custom-input";

export default function ProfileForm() {
    const onChange = (e) => {
        console.log('Чудо')
    }
    return (
        <form >
            <InputCustom onChange={onChange} value={''} name={'name'} placeholder={'Имя'} type={'text'} />
            <div className='mb-6'></div>
            <EmailInputCustom onChange={onChange} value={'value'} name={'email'} placeholder={'Логин'} type={'email'} />
            <div className='mb-6'></div>
            <InputCustom onChange={onChange} value={'value'} name={'pass'} placeholder={'Пароль'} type={'password'} />
        </form>
    )
}