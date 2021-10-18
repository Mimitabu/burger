import React, { useEffect } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';

import { orderList } from '../../utils/data';
import { URL } from '../../utils/url';

function App() {
  const [state, setState] = React.useState({ data: [] });

  function getIngredients() {
    fetch(URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => setState(data))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <div className="page">
      {state.data.length &&
        <>
          <AppHeader />
          <main className={appStyle.main}>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor data={orderList} />
          </main >
        </>
      }
    </div>
  );
}

export default App;
