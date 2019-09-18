import React from "react";
import PropTypes from "prop-types";
import { StyledCell } from "./StyledCell";

const Cell = ({ row, col, content, onHover }) => (
  <StyledCell onMouseOver={() => onHover(col, row)}>
    <div className={"cell__inner"}>
      col-{col}, row-{row} <br /> {content && "content"}
    </div>
  </StyledCell>
);

Cell.propTypes = {};

export default Cell;
