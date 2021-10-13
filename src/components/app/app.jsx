import React from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';

import {data, orderList} from '../../utils/data';


function App() {
  return (
    <div className="page">
      <AppHeader />
      <main className={appStyle.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={orderList} />
      </main >
    </div>
  );
}

export default App;
