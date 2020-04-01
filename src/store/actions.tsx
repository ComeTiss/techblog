export type ActionTypes = UpdateFiltersPostsAction;

export type FiltersPosts = {
  authorId: number;
} | null;

export const UPDATE_FILTERS_POSTS = "UPDATE_FILTERS_POSTS";
interface UpdateFiltersPostsAction {
  type: typeof UPDATE_FILTERS_POSTS;
  payload: {
    filtersPosts: FiltersPosts;
  };
}

export function updateFiltersPosts(
  filtersPosts: FiltersPosts
): UpdateFiltersPostsAction {
  return {
    type: UPDATE_FILTERS_POSTS,
    payload: { filtersPosts }
  };
}
