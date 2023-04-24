import { ADD_START_POINT, ADD_ARRIVAL_POINT } from './constants';
import { Point } from './types';

const addStartPoint = (point: Point) => {
  return {
    type: ADD_START_POINT,
    payload: point,
  };
};

const addArrivalPoint = (point: Point) => {
  return {
    type: ADD_ARRIVAL_POINT,
    payload: point,
  };
};

export { addStartPoint, addArrivalPoint };
