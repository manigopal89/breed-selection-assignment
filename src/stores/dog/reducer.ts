import { BREED_IMAGE_ACTIONS } from "./actions";

const initialState = {
  loading: false,
  src: '',
  error: null,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE:
      return { ...state, loading: true };
    case BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE_SUCCESS:
      return { ...state, error: null, loading: false, src: action.src };
    default: return state
  }
};
