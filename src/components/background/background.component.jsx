import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainContainer,
  SmallBgnContainer,
  BigBgnContainer,
} from './background.styles';

import { selectIsDark } from '../../store/todo/todo.selector';

const Background = () => {
  const isDark = useSelector(selectIsDark);
  return (
    <MainContainer>
      <SmallBgnContainer isDark={isDark} />
      <BigBgnContainer isDark={isDark} />
    </MainContainer>
  );
};

export default Background;
