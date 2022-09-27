import React, { useReducer, useContext } from 'react';
import { HeaderContainer, Title, ToggleDarkLighModeBtn } from './header.styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { TodoContext } from '../../contexts/todoContext';
import { TODO_ACTIONS } from '../../contexts/actionTypes/todoActionTypes';
const Header = () => {
  const { todoDispatch, isDark } = useContext(TodoContext);
  return (
    <HeaderContainer>
      <Title>JAJ</Title>
      <ToggleDarkLighModeBtn
        onClick={() => {
          todoDispatch({ type: TODO_ACTIONS.SET_COLOR_MODE });
        }}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </ToggleDarkLighModeBtn>
    </HeaderContainer>
  );
};

export default Header;
