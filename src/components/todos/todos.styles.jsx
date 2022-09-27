import styled from 'styled-components';

export const TodosContainer = styled.div`
  position: relative;
  min-height: 5rem;
  transition: all 1s linear;
  overflow-y: scroll;
  width: 100%;
  background-color: ${(props) => (props.isDark ? '#192b39' : '#f5f5f5')};
  border-radius: 6px 6px 0 0;
  /* margin-bottom: 2rem; */
  display: ${(props) => (props.todo.length > 0 ? 'block' : 'none')};

  box-shadow: 0px 20px 100px 3px
    ${(props) =>
      props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};
  -moz-box-shadow: 0px 20px 100px 3px
    ${(props) =>
      props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};
  -webkit-box-shadow: 0px 200px 300px 3px
    ${(props) =>
      props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  &::after {
    content: '';
    z-index: -1;
    position: absolute;

    left: 0;
    height: 70%;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0px 20px 100px 3px
      ${(props) =>
        props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};
    -moz-box-shadow: 0px 20px 100px 3px
      ${(props) =>
        props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};
    -webkit-box-shadow: 0px 20px 100px 3px
      ${(props) =>
        props.isDark ? 'rgba(0, 84, 101, 0.5)' : 'rgba(171, 171, 171, 1)'};
    bottom: 0;
    transition: all 1s ease-in;
  }
`;
