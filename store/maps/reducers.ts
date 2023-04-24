import { ADD_START_POINT, ADD_ARRIVAL_POINT } from './constants';
import { IState, Point, TActions } from './types';

const initialState: IState = {
  startPoint: { latitude: 3221, longitude: 111 },
  arrivalPoint: { latitude: 232, longitude: 2222 },
};

const addPointsReducer = (
  state = initialState,
  action: { type: TActions, payload: Point },
) => {
  switch (action.type) {
    case ADD_START_POINT:
      return {
        ...state,
        startPoint: action.payload,
      };
    case ADD_ARRIVAL_POINT:
      return {
        ...state,
        arrivalPoint: action.payload,
      };
    default:
      return state;
  }
};
export default addPointsReducer;
