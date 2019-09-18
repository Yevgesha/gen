import styled, { css } from "styled-components";

const repeatColsCSS = cols => `repeat(${cols}, 1fr)`;

export const StyledGridSidePanelItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  transition: color 0.1s;
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      color: #00bfa5;
    `};
`;

export const StyledGridSidePanel = styled.ul`
  display: grid;
  grid-gap: 16px;
  align-items: center;
  ${({ cols }) =>
    cols &&
    css`
      grid-template-columns: ${repeatColsCSS(cols)};
    `}
`;
