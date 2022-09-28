import React, { useReducer, useContext } from 'react';
import { HeaderContainer, Title, ToggleDarkLighModeBtn } from './header.styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { GlobalContext } from '../../contexts/globalContext';
import { setIsDark } from '../../contexts/actions/todoActions';
const Header = () => {
  const { todoDispatch, isDark } = useContext(GlobalContext);
  return (
    <HeaderContainer>
      <Title>TODO</Title>
      <ToggleDarkLighModeBtn
        onClick={() => {
          todoDispatch(setIsDark(!isDark));
        }}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </ToggleDarkLighModeBtn>
    </HeaderContainer>
  );
};

export default Header;
