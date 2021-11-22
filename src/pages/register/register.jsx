import React, { useRef } from "react";
import style from './register.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regUser } from "../../services/actions/auth";

// function NameInput() {
//     const [value, setState] = React.useState('')

//     const onIconClick = () => {
//         setTimeout(() => emailRef.current.focus(), 0)
//         alert('Icon Click Callback')
//     }
//     return (
//         <Input
//             type={'text'}
//             placeholder={'Имя'}
//             onChange={e => setState(e.target.value)}
//             name={'email'}
//             value={value}
//             error={false}
//             ref={emailRef}
//             errorText={'Ошибка'}
//             size={'default'}
//         />
//     )
// }

// function EmailInput() {
//     const [value, setState] = React.useState('')

//     const onIconClick = () => {
//         setTimeout(() => emailRef.current.focus(), 0)
//         alert('Icon Click Callback')
//     }
//     return (
//         <Input
//             type={'email'}
//             placeholder={'E-mail'}
//             onChange={e => setState(e.target.value)}
//             name={'email'}
//             value={value}
//             error={false}
//             ref={emailRef}
//             errorText={'Ошибка'}
//             size={'default'}
//         />
//     )
// }

// function PassInput() {
//     const [value, setState] = React.useState('')
//     const onChange = e => {
//         setState(e.target.value)
//     }
//     return <PasswordInput onChange={onChange} value={value} name={'password'} />
// }

export default function RegisterPage() {
    const [state, setState] = React.useState({
        name: '',
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

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const history = useHistory();
    const dispatch = useDispatch();

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const onLoginClick = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    const { hasReqRegFailed } = useSelector(store =>
        store.register);
    let register = e => {
        e.preventDefault();
        dispatch(regUser(state.email, state.name, state.password))
        if (!hasReqRegFailed) {
            console.log(getCookie('accessToken'))
            console.log(getCookie('refreshToken'))
            history.replace({ pathname: '/login' });
        }
    }
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className='text text_type_main-medium m-6'>Регистрация</h3>
                <form className={style.form} onSubmit={register}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        name={'name'}
                        value={state.name}
                        error={false}
                        ref={nameRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={onChange}
                        name={'email'}
                        value={state.email}
                        error={false}
                        ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <div className='mb-6'></div>
                    <PasswordInput onChange={onChange} value={state.password} name={'password'} />
                    <div className='mb-6'></div>
                    <Button type="primary" size="small">
                        Зарегистрироваться
                    </Button>
                    <div className='mb-20'></div>
                </form>
                <div className={style.buttons}>
                    <span className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</span>
                    <Button type="secondary" size="medium" onClick={onLoginClick}>
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    )
}