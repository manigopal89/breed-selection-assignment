import { combineReducers } from 'redux';

import { reducer as dog } from './dog/reducer'
import { reducer as breed } from './breed/reducer'
import { ACTIONS } from './actions';

const initialState = {
  onlineStatus: navigator.onLine
};

export const global = (state = initialState, action: any) => {
    console.log('action', action)
  switch (action.type) {
    case ACTIONS.SET_ONLINE_STATUS:
      return { ...state, onlineStatus: action.status };
    default: return state
  }
};


export const rootReducer = combineReducers({
    global,
    dog,
    breed
})