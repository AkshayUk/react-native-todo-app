import {combineReducers} from 'redux';

import todoReducer from './TodoReducer';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
