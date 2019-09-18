import React from "react";
import PropTypes from "prop-types";
import { StyledHeadline } from "./StyledHeadline";

const Headline = ({ tag, children }) => (
  <StyledHeadline as={tag}>{children}</StyledHeadline>
);

Headline.propTypes = {
  children: PropTypes.node.isRequired
};

Headline.defaultProps = {
  tag: "h2"
};

export default Headline;
