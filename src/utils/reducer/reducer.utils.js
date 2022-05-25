// Makes more clear when any action is made on reducers
export const createAction = function (type, payload) {
  return { type, payload };
};
