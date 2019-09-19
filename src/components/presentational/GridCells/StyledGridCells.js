import styled from "styled-components";

export const StyledGridCells = styled.ul`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-gap: 16px;
`;
