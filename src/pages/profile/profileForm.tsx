import React, { useEffect, useState } from "react";
import { EmailInputCustom } from "./custom-input-email";
import { InputCustom } from "./custom-input";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './profileForm.module.css';
import { changeUserData } from "../../services/actions/auth";
import { RootReducer } from "../../services/reducers";

export default function ProfileForm() {
    const dispatch = useDispatch();

    const { user } = useSelector((store: RootReducer) =>
        store.register);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [pass, setPass] = useState('');
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (email === user.email && name === user.name &&
            pass === '') {
            setIsChanged(false)
        } else {
            setIsChanged(true)
        }
    }, [email, name, pass, user]);

    const cancelClick = () => {
        setIsChanged(false);
        setEmail(user.email);
        setName(user.name);
        setPass('');
    }

    const { hasChangeUserReqFailed,
        hasChangeUserReqSuccess } = useSelector((store: RootReducer) =>
            store.register);

    const saveClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataPass = pass === '' ? undefined : pass
        dispatch(
            changeUserData(name, email, dataPass)
        )
        setPass('');
    }

    return (
        <>
            {(user.email !== '' && user.name !== '') ?
                (<form className={style.form} onSubmit={saveClick}>
                    <InputCustom onChange={e => { setName(e.target.value); setIsChanged(true) }}
                        value={name} name={'name'} placeholder={'Имя'} type={'text'} />
                    <div className='mb-6'></div>
                    <EmailInputCustom onChange={e => { setEmail(e.target.value); setIsChanged(true) }}
                        value={email} name={'email'} placeholder={'Логин'} type={'email'} />
                    <div className='mb-6'></div>
                    <InputCustom onChange={e => { setPass(e.target.value); setIsChanged(true) }}
                        value={pass} name={'pass'} placeholder={'Пароль'} type={'password'} />
                    {hasChangeUserReqSuccess &&
                        <span className='text text_type_main-default text_color_inactive'>
                            Данные пользователя успешно изменены
                        </span>
                    }
                    {hasChangeUserReqFailed &&
                        <span className='text text_type_main-default text_color_inactive'>
                            Не удалось изменить данные. Попробуйте позже
                        </span>
                    }
                    {isChanged &&
                        <div className={`mt-6 ${style.buttonContainer}`}>
                            <Button type="primary" size="small" onClick={cancelClick}>
                                Отменить
                            </Button>
                            <Button type="primary" size="small"> Сохранить</Button>
                        </div>
                    }

                </form>) :
                (<span className='text text_type_main-default text_color_inactive'>
                    Невозможно получить данные пользователя. Разлогинтесь и залогинтесь
                </span>)

            }
        </>
    )
}