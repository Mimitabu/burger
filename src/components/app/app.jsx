import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';
import IngredientDetails from '../ingredient-details/ingredientDetails';
import OrderDetails from '../order-details/orderDetails';
import Modal from '../modal/modal';
import { HIDE_MODAL } from '../../services/actions/item';

import { useDispatch, useSelector } from 'react-redux';

import { getIngredients } from '../../services/actions/item';

import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  const { show, content, currentIngredient } = useSelector(store =>
    store.modal
  )

  function closeModal() {
    dispatch({
      type: HIDE_MODAL
    })
  }

  return (
    <Router>
      <Switch>
        <>
          <div className="page">
            <AppHeader />
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/register'>
              <RegisterPage />
            </Route>
            <Route exact path='/'>
              <main className={appStyle.main}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              </main >
              {
                show &&
                <Modal
                  pStyle={content ? 'pt-10 pr-10 pb-15 pl-10' : 'pt-30 pr-25 pb-30 pl-25'}
                  header={content ? 'Детали ингредиента' : ''}
                  closeModal={closeModal}
                >
                  {content ? (
                    <IngredientDetails item={currentIngredient} />
                  ) : (
                    <OrderDetails />
                  )
                  }
                </Modal>
              }
            </Route>
          </div>
        </>

      </Switch>
    </Router>
  );
}

export default App;
