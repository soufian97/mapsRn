import { IStore } from '../configureStore';

export const getStartPoint = (state: IStore) => state.addPoints.startPoint;

export const getArrivalPoint = (state: IStore) => state.addPoints.arrivalPoint;
