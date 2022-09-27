import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderContainer, Title, ToggleDarkLighModeBtn } from './header.styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { selectIsDark } from '../../store/todo/todo.selector';
import { setIsDark } from '../../store/todo/todo.action';
const Header = () => {
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <Title>TODO</Title>
      <ToggleDarkLighModeBtn onClick={() => dispatch(setIsDark(!isDark))}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </ToggleDarkLighModeBtn>
    </HeaderContainer>
  );
};

export default Header;
