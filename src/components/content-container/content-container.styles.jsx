import styled from 'styled-components';

export const AppContent = styled.div`
  font-family: 'Mulish', sans-serif;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
