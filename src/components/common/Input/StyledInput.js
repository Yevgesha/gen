import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #858585;
  border-color: ${({ isEmpty, isValid }) => !isEmpty && !isValid && "red"};
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  ::placeholder {
    color: #dadada;
  }
`;
