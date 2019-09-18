import styled, { css } from "styled-components";

const defaultShadow = "0px 0px 20px rgba(0, 0, 0, 0.15)";
const hoverShadow = "0px 0px 14px rgba(29, 233, 182, 0.7)";

export const StyledCell = styled.li`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 10px;
  background-color: #c4c4c4;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: ${defaultShadow};
  text-shadow: ${defaultShadow};
  color: #dddddd;
  transition: 0.1s;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background-color: #dad9d9;
      box-shadow: ${hoverShadow};
      text-shadow: ${hoverShadow};
      color: #ffffff;
    `}
  ${({ hasContent }) =>
    hasContent &&
    css`
      cursor: pointer;
      &:after {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 30.71%,
          rgba(67, 67, 67, 0.7) 84.29%
        );
      }
    `}
    ${({ isHighlighted, hasContent }) =>
      isHighlighted &&
      hasContent &&
      css`
        opacity: 0.6;
      `}
  &:hover:after {
    background: rgba(29, 233, 182, 0.7);
  }

  .cell__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 16px 0;
  }
`;
