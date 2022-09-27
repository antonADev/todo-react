import React, { useReducer, useContext } from 'react';
import { HeaderContainer, Title, ToggleDarkLighModeBtn } from './header.styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { TodoContext } from '../../contexts/todoContext';
import { TODO_ACTIONS } from '../../contexts/actionTypes/todoActionTypes';
const Header = () => {
  const { dispatch, isDark } = useContext(TodoContext);
  return (
    <HeaderContainer>
      <Title>TODO</Title>
      <ToggleDarkLighModeBtn
        onClick={() => {
          dispatch({ type: TODO_ACTIONS.SET_COLOR_MODE });
          console.log(isDark);
        }}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </ToggleDarkLighModeBtn>
    </HeaderContainer>
  );
};

export default Header;
