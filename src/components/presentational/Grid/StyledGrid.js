import styled from "styled-components";

export const StyledGrid = styled.div`
  .grid__body {
    display: flex;
    flex-flow: row nowrap;
  }

  .grid__items-wrapper {
    flex-grow: 1;
  }

  .grid__side-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .grid__top-panel {
    margin-bottom: 32px;
  }

  .grid__top-panel,
  .grid__items {
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-gap: 16px;
  }
`;
