import React, { useEffect } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';

import { orderList } from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../../services/actions/item';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(getItems())
    dispatch(getItems())

  }, [dispatch]);

  const data = useSelector(store =>
    store
  )
  // console.log(data)
  return (
    <div className="page">
      {data &&
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
