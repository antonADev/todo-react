import styled from 'styled-components';
export const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 600;
  letter-spacing: 10px;
  display: flex;
`;

export const ToggleDarkLighModeBtn = styled.button`
  display: flex;
  background: none;
  color: #ffffff;
  font-size: clamp(1.4rem, 3vw, 2rem);
  border: none;
`;
