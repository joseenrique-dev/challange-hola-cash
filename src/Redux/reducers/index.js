//import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';
import serviceReducer from './service.reducers';

const rootReducer = combineReducers({
  serviceReducer,
});

export default rootReducer;
