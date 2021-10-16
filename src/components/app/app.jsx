import React, { useEffect } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';

import { orderList } from '../../utils/data';
import { URL } from '../../utils/url';


function App() {
  const [state, setState] = React.useState({
    data: []
  })

  useEffect(() => {
    getIngredient(); 
   }, [])

  function getIngredient() {
    fetch(URL)
      .then(res => res.json())
      .then(data => setState(data))
      .catch(e => {
        console.log(e);
      });
  }; 

  const { data } = state;

  return (
    <div className="page">
      {data.length &&
        <>
        <AppHeader />
        <main className={appStyle.main}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={orderList} />
        </main >
        </>
      }
    </div>
  );
}

export default App;
