import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const defaultState = {
  territories: {'park1': true, 'park2': false, 'park3': false, 'park4': true}
};

const configureStore = (preloadedState = defaultState) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
