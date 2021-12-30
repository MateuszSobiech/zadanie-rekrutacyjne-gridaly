import styled from 'styled-components';

export const StyledSquare = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: #ccc;

  &:hover {
    filter: brightness(0.85);
  }

  &.afterOne {
    background-color: #00ff00;
  }

  &.afterThree {
    background-color: #ff0000;
  }
`;
