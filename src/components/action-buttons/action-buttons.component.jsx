import React, { useContext } from 'react';
import { setFilter } from '../../contexts/actions/filteredActions';
import { GlobalContext } from '../../contexts/globalContext';

import { ButtonContainer, Button } from './action-buttons.styles';

const ActionButtons = () => {
  const { isDark } = useContext(GlobalContext);
  const { visibilityDispatch } = useContext(GlobalContext);

  return (
    <ButtonContainer isDark={isDark}>
      <Button
        onClick={() => {
          visibilityDispatch(setFilter('ALL'));
        }}>
        All
      </Button>
      <Button
        onClick={() => {
          visibilityDispatch(setFilter('INCOMPLETE'));
        }}>
        Active
      </Button>
      <Button
        onClick={() => {
          visibilityDispatch(setFilter('COMPLETE'));
        }}>
        Completed
      </Button>
    </ButtonContainer>
  );
};

export default ActionButtons;
