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

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
