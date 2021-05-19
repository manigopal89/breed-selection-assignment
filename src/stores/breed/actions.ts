import { FETCH_BREED } from "../../constants";

export enum BREED_ACTIONS {
  SET_BREED = "SET_BREED",
  FETCH_BREED = "FETCH_BREED",
  FETCHING_BREED = "FETCHING_BREED",
  FETCHING_BREED_SUCCESS = "FETCHING_BREED_SUCCESS",
  FETCHING_BREED_FAILURE = "FETCHING_BREED_FAILURE"
}

export type BREED_DATA = {
  [breed: string]: string[];
};

export const fetchBreed = () => {
  return (dispatch: any) => {
    dispatch(fetchingBreed());
    fetch(FETCH_BREED())
      .then((res) => res.json())
      .then(({ message }: { message: BREED_DATA }) => {
        dispatch(fetchingBreedSuccess(message));
      })
      .catch((e) => {
        dispatch(fetchingBreedFailure(e));
      });
  };
};

export const fetchingBreed = () => {
  return {
    type: BREED_ACTIONS.FETCHING_BREED
  };
};

export const fetchingBreedSuccess = (data: BREED_DATA) => {
  return {
    type: BREED_ACTIONS.FETCHING_BREED_SUCCESS,
    data
  };
};

export const fetchingBreedFailure = (error: any) => {
  return {
    type: BREED_ACTIONS.FETCHING_BREED_FAILURE,
    error
  };
};
