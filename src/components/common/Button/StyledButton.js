import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: #00bfa5;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0, 191, 165, 0.7);
  }
`;
