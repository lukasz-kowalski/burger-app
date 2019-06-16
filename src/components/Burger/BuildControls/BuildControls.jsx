import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import { cheese, bacon, salad, meat } from '../BurgerIngredient/IngredientsConst';

import * as S from './styles';

const controls = [
  { label: 'Salad', type: salad },
  { label: 'Bacon', type: bacon },
  { label: 'Cheese', type: cheese },
  { label: 'Meat', type: meat }
];

const BuildControls = ({ addIngredient, removeIngredient, disabledInfo, price, purchasable }) => (
  <S.BuildControls>
    <p>Current price: <span style={{ fontWeight: 'bold' }}>{price.toFixed(2)}</span></p>
    {controls.map(control => 
      <BuildControl 
        key={control.label} 
        label={control.label} 
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        type={control.type}
        disabled={disabledInfo[control.type]}
      />
    )}
    <S.OrderButton disabled={!purchasable}>ORDER NOW</S.OrderButton>
  </S.BuildControls>
);

export default BuildControls;
