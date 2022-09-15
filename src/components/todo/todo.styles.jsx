import styled from 'styled-components';

const handleColor = (isDark, complete) => {
  switch (`${isDark}-${complete}`) {
    case 'true-true':
      return 'rgba(196, 196, 196, .3)';
    case 'true-false':
      return 'rgba(196, 196, 196, 1)';
    case 'false-true':
      return 'rgba(0, 0, 0, .5)';
    case 'false-false':
      return 'rgba(0, 0, 0, 1)';
    default:
      throw new Error('Something went wrong');
  }
};

export const TodoItem = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 4rem;
  color: ${({ isDark, complete }) => handleColor(isDark, complete)};
  font-size: clamp(1rem, 3.5vw, 1.3rem);
  font-weight: 200;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  :not(:last-child) {
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  }
`;

export const TodoSpan = styled.span`
  position: absolute;
  left: 25px;
`;
