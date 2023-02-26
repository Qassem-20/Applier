import {
  DISPLAY_ALERT
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
       alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
};

export default reducer;
