import styled from 'styled-components';

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
`;

export const InputContainer = styled.input`
  background-color: transparent;
  border: none;

  color: ${(props) => (props.isDark ? '#c4c4c4' : '#000000')};
  font-size: clamp(1rem, 3.5vw, 1.3rem);
  font-weight: 200;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
  transition: all 1s linear;
`;
