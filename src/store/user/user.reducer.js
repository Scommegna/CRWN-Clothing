import { USER_ACTION_TYPES } from "./user.types";

// Reducer for user context
const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
