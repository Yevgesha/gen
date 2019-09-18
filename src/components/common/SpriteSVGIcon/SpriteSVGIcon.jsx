import React from "react";
import PropTypes from "prop-types";
import { StyledSpriteSVGIcon } from "./StyledSpriteSVGIcon";

const SpriteSVGIcon = ({ id, ...props }) => (
  <StyledSpriteSVGIcon xmlns="http://www.w3.org/2000/svg" {...props}>
    <use xlinkHref={`#svg-sprite-${id}`} />
  </StyledSpriteSVGIcon>
);

SpriteSVGIcon.propTypes = {
  id: PropTypes.string.isRequired
};

export default SpriteSVGIcon;
