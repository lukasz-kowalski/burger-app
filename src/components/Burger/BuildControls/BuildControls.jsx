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

const BuildControls = () => (
  <S.BuildControls>
    {controls.map(control => <BuildControl key={control.label} label={control.label} />)}
  </S.BuildControls>
);

export default BuildControls;
