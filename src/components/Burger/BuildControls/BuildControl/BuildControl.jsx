import React from 'react';

import * as S from './styles';

const BuildControl = ({ label }) => (
  <S.BuildControl>
    <S.Label>{label}</S.Label>
    <S.Less>Less</S.Less>
    <S.More>More</S.More>
  </S.BuildControl>
);

export default BuildControl;
