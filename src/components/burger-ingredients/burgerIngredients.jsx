import React from "react";
import burgerIngredientsStyle from './burgerIngredients.module.css';
import IngredientContainer from '../ingredient-container/ingredientContainer'
import { Tab } from '../../index';
import { useSelector } from "react-redux";

function TabUse() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

function getData(arr, type) {
  return arr.filter((el) => el.type === type);
}

function BurgerIngredients() {

  const ingredients = useSelector(store =>
    store.ingredient.items
  )

  const bun = getData(ingredients, 'bun');
  const main = getData(ingredients, 'main');
  const sauce = getData(ingredients, 'sauce');

  return (
    <section className={`${burgerIngredientsStyle.section} mr-10`}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <TabUse />
      <div className={burgerIngredientsStyle.mainContainer}>
        <IngredientContainer text='Булки' data={bun} />
        <IngredientContainer text='Соусы' data={sauce} />
        <IngredientContainer text='Начинки' data={main} />
      </div>
    </section>
  )
}

export default BurgerIngredients

// BurgerIngredients.propTypes = {
//   data: data
// }