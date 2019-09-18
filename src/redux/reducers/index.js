import { normalizeEnity } from "../../helpers";
import { SET_INIT_STATE } from "../constans/index";

const initialDomainState = {
  table: {
    cols: [],
    rows: [],
    cells: []
  }
};

export const rootReducer = (state = initialDomainState, { type, payload }) => {
  switch (type) {
    case SET_INIT_STATE:
      const { cols, rows, cells } = payload.table;

      return {
        ...state,
        ...payload,
        table: {
          cols: normalizeEnity(cols),
          rows: normalizeEnity(rows),
          cells: normalizeEnity(cells)
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
