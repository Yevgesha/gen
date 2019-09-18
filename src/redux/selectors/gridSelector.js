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

    const grid = {
      columns: Object.values(cols.byId),
      rows: filledRows,
      items: []
    };
    const { items: gridItems } = grid;

    for (let i = rowsLength; i > 0; i--) {
      gridItems.push(...new Array(colsLength));
    }

    for (let i = gridItems.length - 1; i >= 0; i--) {
      gridItems[i] = {
        id: i,
        row: Math.floor(i / colsLength),
        col: i % colsLength
      };
    }

    filteredCells.forEach(cell => {
      const colNum = colsAllIds.indexOf(cell.col);
      const rowNum = rowsAllIds.indexOf(cell.row);

      gridItems[colsLength * rowNum + colNum].content = cell;
    });

    return grid;
  }
);
