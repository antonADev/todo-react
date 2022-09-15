import React, { useContext } from 'react';
import {
  ItemContainerStyle,
  InnerContainerStyle,
} from './item-container.styles';
import { TodoContext } from '../../contexts/todoContext';

const ItemContainer = ({ children, noPad }) => {
  const { isDark } = useContext(TodoContext);
  return (
    <ItemContainerStyle isDark={isDark}>
      <InnerContainerStyle noPad={noPad}>{children}</InnerContainerStyle>
    </ItemContainerStyle>
  );
};

export default ItemContainer;
