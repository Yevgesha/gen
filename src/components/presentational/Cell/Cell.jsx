import React from "react";
import PropTypes from "prop-types";
import { StyledCell } from "./StyledCell";

const Cell = ({ rowId, colId, content, hoverOn, hoverOut, isHighlighted }) => (
  <StyledCell
    onMouseEnter={() => hoverOn(colId, rowId)}
    onMouseLeave={hoverOut}
    hasContent={!!content}
    isHighlighted={isHighlighted}
    className={"cell"}
  >
    {content && (
      <>
        {content.image && (
          <div
            className={"cell__bg"}
            style={{ backgroundImage: `url(${content.image})` }}
          />
        )}
        {content.text && <div className={"cell__inner"}>{content.text}</div>}
      </>
    )}
  </StyledCell>
);

Cell.propTypes = {};

export default Cell;
