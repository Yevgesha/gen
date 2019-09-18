import { createSelector } from "reselect";
import { tableSelector } from "./index";

export const gridSelector = createSelector(
  tableSelector,
  ({ cols, rows, cells }) => {
    const colsAllIds = cols.allIds;
    const rowsAllIds = rows.allIds;

    const rowsIdSet = new Set();

    const filteredCells = Object.values(cells.byId).filter(({ row }) => {
      const check = rowsAllIds.includes(row);
      if (check) {
        rowsIdSet.add(row);
      }
      return check;
    });

    const colsLength = colsAllIds.length;
    const rowsLength = rowsIdSet.size;

    const filledRows = Object.values(rows.byId).filter(({ id }) =>
      rowsIdSet.has(id)
    );
    filledRows.forEach((row, index) => (row.rowId = index));

    const filledCols = Object.values(cols.byId).map((col, colId) => ({
      ...col,
      colId
    }));

    const grid = {
      cols: filledCols,
      rows: filledRows,
      cells: []
    };
    const { cells: gridCells } = grid;

    for (let i = rowsLength; i > 0; i--) {
      gridCells.push(...new Array(colsLength));
    }

    for (let i = gridCells.length - 1; i >= 0; i--) {
      gridCells[i] = {
        id: i,
        rowId: Math.floor(i / colsLength),
        colId: i % colsLength
      };
    }

    filteredCells.forEach(cell => {
      const colNum = colsAllIds.indexOf(cell.col);
      const rowNum = rowsAllIds.indexOf(cell.row);

      gridCells[colsLength * rowNum + colNum].content = cell.content;
    });

    return grid;
  }
);
