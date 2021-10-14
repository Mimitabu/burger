import React from "react";
import PropTypes from 'prop-types';
import burgerIngredientsStyle from './burgerIngredients.module.css';
import IngredientContainer from '../ingredient-container/ingredientContainer'
import { Tab } from '../../index';
const { arrayOf, number, shape, string } = PropTypes;

function TabUse(){
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
  return  arr.filter((el) => el.type === type);
 }

function BurgerIngredients(props){
  const bun = getData(props.data, 'bun');
  const main = getData(props.data, 'main');
  const sauce = getData(props.data, 'sauce');

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

BurgerIngredients.propTypes = arrayOf(shape({
  _id: string.isRequired,
  calories: number.isRequired,
  carbohydrates: number.isRequired,
  fat: number.isRequired,
  image: string.isRequired,
  image_large: string.isRequired,
  image_mobile: string,
  name: string.isRequired,
  price: number.isRequired,
  proteins: number.isRequired,
  type: string.isRequired,
  __v: number.isRequired,
}).isRequired).isRequired

export default BurgerIngredients