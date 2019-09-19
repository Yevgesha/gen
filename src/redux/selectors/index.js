import { createSelector } from "reselect";

export const headInfoSelector = state => state.headInfo;
export const headInfoHeadlineSelector = createSelector(
  headInfoSelector,
  data => data.headline
);
export const headInfoParagraphSelector = createSelector(
  headInfoSelector,
  data => data.paragraph
);

export const formSelector = state => state.form;

export const weekSelectSelector = state => state.weekSelect;

export const tableSelector = state => state.table;

export const downloadsSelectSelector = state => state.downloads;

export const recommendationsSelector = state => state.recommendations;
