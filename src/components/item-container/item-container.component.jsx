import React, { useContext } from 'react';
import {
  ItemContainerStyle,
  InnerContainerStyle,
} from './item-container.styles';
import { GlobalContext } from '../../contexts/globalContext';

const ItemContainer = ({ children, noPad }) => {
  const { isDark } = useContext(GlobalContext);
  return (
    <ItemContainerStyle isDark={isDark}>
      <InnerContainerStyle noPad={noPad}>{children}</InnerContainerStyle>
    </ItemContainerStyle>
  );
};

export default ItemContainer;
