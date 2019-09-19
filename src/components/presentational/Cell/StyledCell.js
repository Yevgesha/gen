import styled from "styled-components";

const defaultShadow = "0px 0px 20px rgba(0, 0, 0, 0.15)";
const hoverShadow = "0px 0px 14px rgba(29, 233, 182, 0.7)";

const defaultBGMask =
  "linear-gradient(180deg, rgba(255, 255, 255, 0) 30.71%, rgba(67, 67, 67, 0.7) 84.29%)";
const hoverBGMask = "rgba(224, 224, 224, 0.55)";
const hoverBGMaskMain = "rgba(29, 233, 182, 0.7)";

export const StyledCell = styled.li`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 10px;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? "#dad9d9" : "#c4c4c4"};
  box-shadow: ${({ isHighlighted }) =>
    isHighlighted ? hoverShadow : defaultShadow};
  text-shadow: ${({ isHighlighted }) =>
    isHighlighted ? hoverShadow : defaultShadow};
  color: ${({ isHighlighted }) => (isHighlighted ? "#ffffff" : "#dddddd")};
  cursor: ${({ hasContent }) => (hasContent ? "pointer" : "default")};
  transition: 0.1s;

  .cell__bg,
  .cell__bg:before,
  .cell__bg:after,
  .cell__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: 0.1s;
  }

  .cell__bg {
    background-size: cover;
    background-repeat: no-repeat;

    &:before,
    &:after {
      content: "";
    }
    &:before {
      background: ${defaultBGMask};
      opacity: ${({ isHighlighted }) => (isHighlighted ? 0 : 1)};
    }
    &:after {
      background: ${hoverBGMask};
      opacity: ${({ isHighlighted }) => (isHighlighted ? 1 : 0)};
    }
  }

  &:hover .cell__bg:after {
    background: ${hoverBGMaskMain};
  }

  .cell__inner {
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 16px 0;
  }
`;
