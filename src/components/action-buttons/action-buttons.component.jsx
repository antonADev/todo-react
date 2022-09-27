import React, { useContext } from 'react';
import { FILTERED_ACTIONS } from '../../contexts/actionTypes/filteredActionTypes';
import { TodoContext } from '../../contexts/todoContext';

import { ButtonContainer, Button } from './action-buttons.styles';

const ActionButtons = () => {
  const { isDark } = useContext(TodoContext);
  const { visibilityDispatch } = useContext(TodoContext);

  return (
    <ButtonContainer isDark={isDark}>
      <Button
        onClick={() => {
          visibilityDispatch({ type: FILTERED_ACTIONS.SHOW_ALL });
        }}>
        All
      </Button>
      <Button
        onClick={() => {
          visibilityDispatch({ type: FILTERED_ACTIONS.SHOW_INCOMPLETE });
        }}>
        Active
      </Button>
      <Button
        onClick={() => {
          visibilityDispatch({ type: FILTERED_ACTIONS.SHOW_COMPLETE });
        }}>
        Completed
      </Button>
    </ButtonContainer>
  );
};

export default ActionButtons;
