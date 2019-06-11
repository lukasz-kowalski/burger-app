import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { breadBottom, breadTop, meat, cheese, salad, bacon } from './BurgerIngredient/IngredientsConst';

import * as S from './styles';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map(key => [...Array(ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />)).reduce((acc, curr) => acc.concat(curr), []);

  return (
    <S.Burger>
      <BurgerIngredient type={breadTop} />
      {transformedIngredients.length > 0 ? transformedIngredients : <p>Please start adding ingredients</p>}
      <BurgerIngredient type={breadBottom} />
    </S.Burger>
  );
}

export default Burger;
