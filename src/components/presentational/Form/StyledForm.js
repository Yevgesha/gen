import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  margin-bottom: 40px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;

  .form__headline {
    margin-bottom: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  .form__field {
    margin-bottom: 24px;
  }

  .form__close {
    position: absolute;
    top: 16px;
    right: 16px;

    &:after {
      content: "";
      position: absolute;
      top: -16px;
      left: -16px;
      right: -16px;
      bottom: -16px;
    }
  }

  .form__close-icon {
    width: 16px;
    height: 16px;
  }
`;
