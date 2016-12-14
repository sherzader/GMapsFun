import { combineReducers } from 'redux';
import TerritoriesReducer from './territories_reducer';

const RootReducer = combineReducers({
  territories: TerritoriesReducer
});

export default RootReducer;
