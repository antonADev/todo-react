import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  min-height: 5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => (props.isDark ? '#192b39' : '#f5f5f5')};
  align-items: center;
  color: ${({ isDark }) =>
    isDark ? 'rgba(196, 196, 196, 1)' : 'rgba(0, 0, 0, 1)'};

  border-top: 1px solid rgba(128, 128, 128, 0.3);
  transition: all 1s linear;
  border-radius: 0 0 6px 6px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  margin-right: 10px;
`;
