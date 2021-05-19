import { FETCH_BREED_IMAGE } from "../../constants";

export enum BREED_IMAGE_ACTIONS {
  FETCH_BREED_IMAGE = "FETCH_BREED",
  FETCHING_BREED_IMAGE = "FETCHING_BREED",
  FETCHING_BREED_IMAGE_SUCCESS = "FETCHING_BREED_SUCCESS",
  FETCHING_BREED_IMAGE_FAILURE = "FETCHING_BREED_FAILURE",
}

export type BREED_DATA = {
  [breed: string]: string[];
};

export const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchBreedImage = (breed: string, subBreed?: string) => {
  return (dispatch: any) => {
    dispatch(fetchingBreedImage());
    fetch(FETCH_BREED_IMAGE(breed, subBreed))
      .then(handleErrors)
      .then((res) => res.json())
      .then(({ message }: { message: string }) => {
        dispatch(fetchingBreedImageSuccess(message));
      })
      .catch((e) => {
        dispatch(fetchingBreedImageFailure(e));
      });
  };
};

export const fetchingBreedImage = () => {
  return {
    type: BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE,
  };
};

export const fetchingBreedImageSuccess = (src: string) => {
  return {
    type: BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE_SUCCESS,
    src,
  };
};

export const fetchingBreedImageFailure = (error: any) => {
  return {
    type: BREED_IMAGE_ACTIONS.FETCHING_BREED_IMAGE_FAILURE,
    error,
  };
};
