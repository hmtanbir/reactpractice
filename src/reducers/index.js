import { combineReducers } from 'redux';

import customerReducer from './customerReducer';

const reducers = {
  customerStore: customerReducer,
}

const rootReducer = combineReducers({
  ...reducers
});

export default rootReducer;