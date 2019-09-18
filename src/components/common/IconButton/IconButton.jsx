import React from "react";
import PropTypes from "prop-types";
import { StyledIconButton } from "./StyledIconButton";

const IconButton = ({ children, type, ...props }) => (
  <StyledIconButton type={type} {...props}>
    {children}
  </StyledIconButton>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

IconButton.defaultProps = {
  type: "button"
};

export default IconButton;
