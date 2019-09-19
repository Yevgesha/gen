import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "../../../layouts/Container/Container";
import GridCells from "../GridCells/GridCells";
import GridSidePanel from "../GridSidePanel/GridSidePanel";
import { StyledGrid } from "./StyledGrid";

const highLightItem = item => ({ ...item, isHighlighted: true });

const highLightList = (colId, rowId, items) =>
  items.map(item => {
    if (item.colId === colId || item.rowId === rowId) {
      return highLightItem(item);
    } else {
      return item;
    }
  });

const highLightGrid = (colId, rowId, { cols, rows, cells }) => ({
  cols: highLightList(colId, rowId, cols),
  rows: highLightList(colId, rowId, rows),
  cells: highLightList(colId, rowId, cells)
});

const Grid = ({ grid }) => {
  const [statefulGrid, updGridState] = useState({ ...grid });
  const { cells, cols, rows } = statefulGrid;

  return (
    <StyledGrid className={"grid"}>
      <div className="grid__body">
        <GridSidePanel
          items={rows}
          direction={"column"}
          className="grid__left-panel"
        />
        <Container align={"right"} className="grid__cells-wrapper">
          <GridSidePanel items={cols} className="grid__top-panel" />
          <GridCells
            hoverOn={(colId, rowId) =>
              updGridState(highLightGrid(colId, rowId, grid))
            }
            hoverOut={() => updGridState(grid)}
            colsLength={cols.length}
            cells={cells}
          />
        </Container>
      </div>
    </StyledGrid>
  );
};

Grid.propTypes = {
  grid: PropTypes.shape({
    cols: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    cells: PropTypes.array.isRequired
  }).isRequired
};

export default Grid;
