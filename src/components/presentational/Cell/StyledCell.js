import styled from "styled-components";

export const StyledCell = styled.li`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 10px;
  background-color: #c4c4c4;

  .cell__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;
