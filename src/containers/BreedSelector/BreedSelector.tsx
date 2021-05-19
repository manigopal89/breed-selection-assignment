import { CircularProgress } from "@material-ui/core";
import { FC, useEffect } from "react";
import {
  BreedSelector,
  BreedSelectorProps,
} from "../../components/BreedSelector";
import { RouteComponentProps } from "react-router-dom";
import { ErrorContainer } from "../../components/ErrorContainer";

export interface BreedSelectorContainerProps
  extends Omit<BreedSelectorProps, "onSelectBreed">,
    RouteComponentProps {
  loading: boolean;
  fetchBreed: any;
  error: any;
  onlineStatus: boolean
}

export const BreedSelectorContainer: FC<BreedSelectorContainerProps> = ({
  loading,
  fetchBreed,
  history,
  error,
  onlineStatus,
  ...breedSelectorProps
}) => {
  console.log(onlineStatus)
  useEffect(() => {
    fetchBreed();
  }, []);
  return !error ? (
    loading ? (
      <CircularProgress />
    ) : (
      <BreedSelector
        {...breedSelectorProps}
        disabled={!onlineStatus}
        onSelectBreed={
          ((data: any) => {
            const confirm = window.confirm(`Selected breed is ${data.breed}` + (data.subBreed ? ` and sub breed is ${data.subBreed}`: ''))
            if (confirm) {
              history.push(
                `/breed-detail?${new URLSearchParams(data).toString()}`
              );
            }
          }) as any
        }
      />
    )
  ) : (
    <ErrorContainer
    title='Hmmm'
    subTitle='Something went wrong'
      onBackClick={() => {
        history.goBack();
      }}
    />
  );
};
