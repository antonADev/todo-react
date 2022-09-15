import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/todoContext';
import {
  MainContainer,
  SmallBgnContainer,
  BigBgnContainer,
} from './background.styles';

const Background = () => {
  const { isDark } = useContext(TodoContext);
  return (
    <MainContainer>
      <SmallBgnContainer isDark={isDark} />
      <BigBgnContainer isDark={isDark} />
    </MainContainer>
  );
};

export default Background;
