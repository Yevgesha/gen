import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./StyledInput";

const Input = ({
  type,
  placeholder,
  className,
  isValid,
  isEmpty,
  ...props
}) => (
  <StyledInput
    className={className}
    type={type}
    isValid={isValid}
    isEmpty={isEmpty}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  isEmpty: PropTypes.bool
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  isValid: true,
  isEmpty: false
};

export default Input;
