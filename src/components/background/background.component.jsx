import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import {
  MainContainer,
  SmallBgnContainer,
  BigBgnContainer,
} from './background.styles';

const Background = () => {
  const { isDark } = useContext(GlobalContext);
  return (
    <MainContainer>
      <SmallBgnContainer isDark={isDark} />
      <BigBgnContainer isDark={isDark} />
    </MainContainer>
  );
};

export default Background;
