import { BREED_ACTIONS } from "./actions";

const initialState = {
  loading: false,
  breedData: null,
  error: null,
};

export const reducer = (state = initialState, action: any) => {
    debugger
  switch (action.type) {
    case BREED_ACTIONS.FETCHING_BREED:
      return { ...state, loading: true };
    case BREED_ACTIONS.FETCHING_BREED_FAILURE:
      return { ...state, loading: false, error: action.error };
    case BREED_ACTIONS.FETCHING_BREED_SUCCESS:
      return { ...state, error: null, loading: false, breedData: action.data };
    default: return state
  }
};
