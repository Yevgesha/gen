import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

const Button = ({ type, children, ...restProps }) => (
  <StyledButton type={type} {...restProps}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
