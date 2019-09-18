import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./StyledContainer";

const Container = ({ children, mode, align, tag, className }) => (
  <StyledContainer className={className} mode={mode} align={align} as={tag}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string,
  align: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string
};

Container.defaultProps = {
  mode: "large",
  align: "",
  tag: "",
  className: ""
};

export default Container;
