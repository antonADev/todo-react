import styled from 'styled-components';

export const ItemContainerStyle = styled.div`
  min-height: 5rem;
  max-height: 20rem;
  width: 100%;
  background-color: ${(props) => (props.isDark ? '#192b39' : '#f5f5f5')};
  border-radius: 6px;
  margin-bottom: 2rem;
  transition: all 1s linear;
`;

export const InnerContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
`;
