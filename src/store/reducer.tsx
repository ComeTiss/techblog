import { ActionTypes, UPDATE_USER_ID, UserID } from "./actions";

type State = {
  userId: UserID;
};

const defaultState: State = {
  userId: null
};

function reducer(state = defaultState, action: ActionTypes) {
  switch (action.type) {
    case UPDATE_USER_ID:
      return { userId: action.payload.userId };
    default:
      return state;
  }
}

export default reducer;
