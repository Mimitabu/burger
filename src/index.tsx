import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { initStore } from './services/store';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  CloseIcon,
  CheckMarkIcon,
  CurrencyIcon,
  DragIcon,
  EditIcon,
  HideIcon,
  InfoIcon,
  ListIcon,
  LockIcon,
  LogoutIcon,
  ProfileIcon,
  ShowIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MenuIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';;

export {
  Button,
  Logo,
  ConstructorElement,
  Tab,
  Input,
  Counter,
  EmailInput,
  PasswordInput,
  BurgerIcon,
  CloseIcon,
  CheckMarkIcon,
  CurrencyIcon,
  DragIcon,
  EditIcon,
  HideIcon,
  InfoIcon,
  ListIcon,
  LockIcon,
  LogoutIcon,
  ProfileIcon,
  ShowIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MenuIcon,
};

export const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
