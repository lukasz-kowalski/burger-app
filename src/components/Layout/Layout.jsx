import React from 'react';

import * as S from './styles';

const Layout = ({ children }) => (
  <>
    <S.Content>
      {children}
    </S.Content>
  </>
);

export default Layout;
