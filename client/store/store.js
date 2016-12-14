import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const defaultState = {
  territories: {}
};

const configureStore = (preloadedState = defaultState) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
