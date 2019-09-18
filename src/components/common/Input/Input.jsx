import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./StyledInput";

const Input = ({ type, placeholder, className }) => (
  <StyledInput className={className} type={type} placeholder={placeholder} />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: ""
};

export default Input;
