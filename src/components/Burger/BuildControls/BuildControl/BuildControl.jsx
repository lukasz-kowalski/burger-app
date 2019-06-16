import React from 'react';

import * as S from './styles';

const BuildControl = ({ label, addIngredient, type, removeIngredient, disabled }) => {
  const handleClickMore = () => addIngredient(type);
  const handleClickLess = () => removeIngredient(type);

  return (
    <S.BuildControl>
      <S.Label>{label}</S.Label>
      <S.Less onClick={handleClickLess} disabled={disabled}>Less</S.Less>
      <S.More onClick={handleClickMore}>More</S.More>
    </S.BuildControl>
  );
}

export default BuildControl;
