import React from "react";
import PropTypes from "prop-types";
import GridCell from "../GridCell/GridCell";
import { StyledGridCells } from "./StyledGridCells";

const GridCells = ({ cells, colsLength, hoverOn, hoverOut }) => (
  <StyledGridCells cols={colsLength}>
    {cells.map(cell => (
      <GridCell key={cell.id} {...cell} hoverOn={hoverOn} hoverOut={hoverOut} />
    ))}
  </StyledGridCells>
);

GridCells.propTypes = {
  cells: PropTypes.array.isRequired,
  colsLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hoverOn: PropTypes.func.isRequired,
  hoverOut: PropTypes.func.isRequired
};

export default GridCells;
