import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "./user.types";

// Creates action for user context
export const setCurrentUser = function (user) {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
