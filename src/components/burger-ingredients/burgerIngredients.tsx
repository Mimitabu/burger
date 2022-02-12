import React, { useRef } from "react";
import burgerIngredientsStyle from './burgerIngredients.module.css';
import IngredientContainer from './ingredient-container/ingredientContainer'
import { Tab } from '../../index';
import { CHANDGE_CURRENT_TAB } from '../../services/actions/item';
import { ItemType } from "../../utils/ts-types";
import { useDispatch, useSelector } from "../../services/hooks";



function BurgerIngredients() {
  const dispatch = useDispatch();
  const current = useSelector((store) =>
    store.currentTab.current)

  const changeCurrent = (current: string) => {
    dispatch({
      type: CHANDGE_CURRENT_TAB,
      current
    })
  }

  function TabUse() {
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="Булки" active={current === 'Булки'} onClick={changeCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={changeCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={changeCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }

  const ingredients = useSelector((store) =>
    store.ingredient.items
  )

  function getData(arr: ItemType[], type: string) {
    return arr.filter((el) => el.type === type);
  }

  const ref = useRef<HTMLDivElement>(null);

  const bun = getData(ingredients, 'bun');
  const main = getData(ingredients, 'main');
  const sauce = getData(ingredients, 'sauce');

  const bunContainer: HTMLElement | null = document.getElementById('bun');
  const sauceContainer: HTMLElement | null = document.getElementById('sauce');
  const mainContainer: HTMLElement | null = document.getElementById('main');

  const returnTop = () => {
    let parentPosition = ref.current!.getBoundingClientRect().top;
    let bunPosition = bunContainer!.getBoundingClientRect().bottom - parentPosition;
    let saucePosition = sauceContainer!.getBoundingClientRect().bottom - parentPosition;
    let mainPosition = mainContainer!.getBoundingClientRect().bottom - parentPosition;

    if (bunPosition > 0) {
      changeCurrent('Булки');
    }
    if (bunPosition < 0 && saucePosition > 0 && saucePosition > parentPosition) {
      changeCurrent('Соусы');
    }
    if (bunPosition < 0 && saucePosition < 0 && mainPosition > parentPosition) {
      changeCurrent('Начинки');
    }
  }

  return (
    <section className={`${burgerIngredientsStyle.section} mr-10`}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <TabUse />
      <div className={burgerIngredientsStyle.mainContainer} onScroll={returnTop} ref={ref}>
        <IngredientContainer text='Булки' data={bun} type='bun' />
        <IngredientContainer text='Соусы' data={sauce} type='sauce' />
        <IngredientContainer text='Начинки' data={main} type='main' />
      </div>
    </section>
  )
}

export default BurgerIngredients
