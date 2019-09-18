import styled from "styled-components";

export const StyledGrid = styled.div`
  .grid__body {
    display: flex;
    flex-flow: row nowrap;
  }

  .grid__left-panel {
    padding-top: 52px;
    margin-right: 16px;
  }

  .grid__top-panel {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .grid__cells-wrapper {
    position: relative;
    padding-top: 52px;
    flex-grow: 1;
  }

  .grid__cells {
    display: grid;
    grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
    grid-gap: 16px;
  }
`;
