import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import { getUser } from '../../services/actions/auth';

import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import FogotPassPage from '../../pages/fogot-password/fogotPassword';
import ResetPasswordPage from '../../pages/reset-password/resetPassword';
import ProfilePage from '../../pages/profile/profile';
import Feed from '../../pages/feed/feed';
import { ProtectedRoute } from '../protected-route';
import { RootReducer } from '../../services/reducers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser())
  })

  return (
    <Router>
      <Routes />
    </Router>
  );
}

const Routes = () => {
  const dispatch = useDispatch()
  const location = useLocation<any>();
  const history = useHistory();
  const background = location.state?.background;
  const { show } = useSelector((store: RootReducer) =>
    store.modal
  )
  function closeModal() {
    dispatch({
      type: HIDE_MODAL
    })
  }

  return <>
    <div className="page">
      <AppHeader />
      <Switch location={background ?? location}>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/fogot-password'>
          <FogotPassPage />
        </Route>
        <Route exact path='/reset-password'>
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
        <Route exact path="/ingredients/:id">
          <IngredientDetails />
        </Route>
        <Route exact path="/feed">
          <Feed />
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
              pStyle='pt-30 pr-25 pb-30 pl-25'
              header=''
              closeModal={closeModal}
            >
              <OrderDetails />
            </Modal>
          }
        </Route>
      </Switch>
    </div>
    {
      background &&
      <Route path="/ingredients/:id" >
        <Modal pStyle='pt-10 pr-10 pb-15 pl-10'
          header={'Детали ингредиента'}
          closeModal={() => history.replace("/")} >
          <IngredientDetails />
        </Modal>
      </Route>
    }
  </>
}

export default App;
