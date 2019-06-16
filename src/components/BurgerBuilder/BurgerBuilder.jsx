import React, { useState, useEffect } from 'react';

import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

const initialIngredients = {
  salad: 1,
  bacon: 1,
  cheese: 2,
  meat: 2
};

const ingredientPrices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {
  const [ ingredients, setIngredients ] = useState(initialIngredients);
  const [ totalPrice, setPrice ] = useState(4);
  const [ purchasable, setPurchasable ] = useState(false);

  useEffect(() => {
    checkIngredientsAmount();
  }, [ingredients, checkIngredientsAmount]);

  const checkIngredientsAmount = () => {
    const sum = Object.keys(ingredients).map(key => ingredients[key]).reduce((acc, curr) => acc + curr, 0);
    setPurchasable(sum > 0);
  }

  const addIngredient = type => {
    const updatedCount = ingredients[type] + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ingredientPrices[type];

    setIngredients(updatedIngredients);
    setPrice(prevPrice => prevPrice + priceAddition);
  }

  const removeIngredient = type => {
    if (ingredients[type] <= 0) return;
  
    const updatedCount = ingredients[type] - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = ingredientPrices[type];

    setIngredients(updatedIngredients);
    setPrice(prevPrice => prevPrice - priceDeduction);
  }

  const disabledInfo = {
    ...ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls 
        addIngredient={addIngredient} 
        removeIngredient={removeIngredient} 
        disabledInfo={disabledInfo} 
        price={totalPrice}
        purchasable={purchasable}
      />
    </>
  );
}

export default BurgerBuilder;
