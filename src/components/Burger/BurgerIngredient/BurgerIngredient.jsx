import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { breadBottom, breadTop, meat, cheese, salad, bacon } from './IngredientsConst';

import * as S from './styles';

const BurgerIngredient = ({ type }) => {
  const [ ingredient, setIngredient ] = useState(null);

  useEffect(() => {
    switch (type) {
      case breadBottom:
        return setIngredient(<S.BreadBottom />);
      case breadTop:
        return setIngredient(
          <S.BreadTop><S.Seeds1 /><S.Seeds2 /></S.BreadTop>
        );
      case meat:
        return setIngredient(<S.Meat />);
      case cheese:
        return setIngredient(<S.Cheese />);
      case salad:
        return setIngredient(<S.Salad />);
      case bacon:
        return setIngredient(<S.Bacon />);
      default:
        return setIngredient(null);
    }
  }, [type]);
  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
