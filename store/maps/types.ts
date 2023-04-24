import { ADD_ARRIVAL_POINT, ADD_START_POINT } from "./constants";

export type TActions = typeof ADD_START_POINT | typeof ADD_ARRIVAL_POINT;

export type Point = {
    latitude: number,
    longitude: number,
};
  
export interface IState {
    startPoint: Point
    arrivalPoint: Point
}
 