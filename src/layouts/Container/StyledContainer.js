import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  ${({ mode }) => {
    switch (mode) {
      case "sm":
        return css`
          max-width: 340px;
        `;
      case "md":
        return css`
          max-width: 552px;
        `;
      default:
        return css`
          max-width: 993px;
        `;
    }
  }}
  ${({ align }) => {
    switch (align) {
      case "right":
        return css`
          margin: 0 0 0 auto;
        `;
      case "left":
        return css`
          margin: 0 auto 0 0;
        `;
      default:
        return "";
    }
  }}
`;
