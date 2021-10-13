import React from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';

import {data} from '../../utils/data';


function App() {
  // React.useEffect(() => {
  //   console.log('bun', bun);
  //   console.log('main', main);
  //   console.log('sauce', sauce);
  // }
// )
  return (
    <div className="page">
      <AppHeader />
      <main className={appStyle.main}>
        <BurgerIngredients data={data} />
      </main >
      
    </div>
  );
}

export default App;
