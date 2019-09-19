import styled from "styled-components";

export const StyledGrid = styled.div`
  margin-bottom: 72px;
  position: relative;
  z-index: 1;

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
    z-index: 1;
    padding-top: 52px;
    flex-grow: 1;
  }
`;
