import React from "react";
import PropTypes from "prop-types";
import { StyledCell } from "./StyledCell";

const Cell = ({ rowId, colId, content, hoverOn, hoverOut, isHighlighted }) => (
  <StyledCell
    onMouseEnter={() => hoverOn(colId, rowId)}
    onMouseLeave={hoverOut}
    hasContent={content ? true : false}
    isHighlighted={isHighlighted}
    style={{ backgroundImage: content && `url(${content.image})` }}
  >
    <div className={"cell__inner"}>{content && content.text}</div>
  </StyledCell>
);

Cell.propTypes = {};

export default Cell;
