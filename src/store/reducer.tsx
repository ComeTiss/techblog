import { ActionTypes, UPDATE_FILTERS_POSTS, FiltersPosts } from "./actions";

type State = {
  filtersPosts: FiltersPosts;
};

const defaultState: State = {
  filtersPosts: null
};

function reducer(state = defaultState, action: ActionTypes) {
  switch (action.type) {
    case UPDATE_FILTERS_POSTS:
      return { filtersPosts: action.payload.filtersPosts };
    default:
      return state;
  }
}

export default reducer;
