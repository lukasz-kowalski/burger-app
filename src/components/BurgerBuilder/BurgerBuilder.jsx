import React, { useState } from 'react';

import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

const initialIngredients = {
  salad: 1,
  bacon: 1,
  cheese: 2,
  meat: 2
};

const BurgerBuilder = () => {
  const [ ingredients, setIngredients ] = useState(initialIngredients);

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </>
  );
}

export default BurgerBuilder;
