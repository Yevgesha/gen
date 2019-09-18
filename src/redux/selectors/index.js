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
export const formHeadlineSelector = createSelector(
  formSelector,
  data => data.headline
);
export const formFieldSelector = createSelector(
  formSelector,
  data => data.field
);
export const formButtonSelector = createSelector(
  formSelector,
  data => data.button
);

export const weekSelectSelector = state => state.weekSelect;
export const daySelectSelector = state => state.daySelect;

export const tableSelector = state => state.table;

export const downloadsSelectSelector = state => state.downloads;

export const recomendationsSelector = state => state.recomendations;
export const recomendationsHeadlineSelector = createSelector(
  recomendationsSelector,
  data => data.headline
);
export const recomendationsIntroSelector = createSelector(
  recomendationsSelector,
  data => data.intro
);
export const recomendationsItemsSelector = createSelector(
  recomendationsSelector,
  data => data.items
);
