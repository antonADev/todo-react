import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FILTERED_ACTIONS } from '../../contexts/actionTypes/filteredActionTypes';
import { TodoContext } from '../../contexts/todoContext';

import { selectIsDark } from '../../store/todo/todo.selector';

import { ButtonContainer, Button } from './action-buttons.styles';

const ActionButtons = () => {
  const isDark = useSelector(selectIsDark);
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
