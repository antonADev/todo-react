import styled from 'styled-components';
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const darkGradient =
  'linear-gradient(to right,rgba(6, 0, 110, 0.75) 0%,rgba(9, 9, 121, 0.75) 35%,rgba(181, 0, 255, 0.75) 100%)';
const lightGradient =
  'linear-gradient(to left,rgba(6, 0, 110, 0.45) 0%,rgba(9, 9, 121, 0.45) 35%,rgba(181, 0, 255, 0.55) 100%)';

export const SmallBgnContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 100vw;
  /* background-image: ${(props) =>
    props.isDark ? darkGradient : lightGradient},
    url(https://images.pexels.com/photos/1687104/pexels-photo-1687104.jpeg?cs=srgb&dl=pexels-julio-nery-1687104.jpg&fm=jpg); */
  background-image: ${darkGradient},
    url(https://images.pexels.com/photos/1687104/pexels-photo-1687104.jpeg?cs=srgb&dl=pexels-julio-nery-1687104.jpg&fm=jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: ${lightGradient},
      url(https://images.pexels.com/photos/1687104/pexels-photo-1687104.jpeg?cs=srgb&dl=pexels-julio-nery-1687104.jpg&fm=jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transition: opacity 1s ease-in;
    opacity: ${(props) => (props.isDark ? 0 : 1)};
  }
`;

export const SmallBgnContainerLight = styled(SmallBgnContainer)``;

export const BigBgnContainer = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: ${(props) =>
    props.isDark ? '#0b1319' : 'hsl(0, 0%, 98%)'};
  transition: all 1s ease-in;
`;
