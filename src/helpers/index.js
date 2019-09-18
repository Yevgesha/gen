export const addEntity = (state, entity) => {
  if (!entity.id) return state;

  return { ...state, [entity.id]: entity };
};
export const addEntityId = (state, entity) => {
  if (!entity.id) return state;

  return [...state, entity.id];
};
export const normalizeEnity = (arr = []) => {
  return {
    byId: arr.reduce(addEntity, {}),
    allIds: arr.reduce(addEntityId, [])
  };
};
