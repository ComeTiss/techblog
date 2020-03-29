export const UPDATE_USER_ID = "UPDATE_USER_ID";

export type ActionTypes = UpdateUserIdAction;

export type UserID = number | null;

interface UpdateUserIdAction {
  type: typeof UPDATE_USER_ID;
  payload: {
    userId: UserID;
  };
}

export function updateUserId(userId: UserID): UpdateUserIdAction {
  return {
    type: UPDATE_USER_ID,
    payload: { userId }
  };
}
