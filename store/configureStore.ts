import { createStore, combineReducers } from 'redux';
import addPointsReducer from './maps/reducers';

const rawReducers = {
    addPoints: addPointsReducer,
}

const rootReducer = combineReducers(rawReducers);

const configureStore = () => {
  return createStore(rootReducer);
};

export type IStore = {
    [K in keyof typeof rawReducers]: ReturnType<typeof rawReducers[K]>
}

export default configureStore;
