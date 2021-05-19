import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import capitalizeSentence from "../../utils/capitalize-sentence";

export interface DogViewerProps extends RouteComponentProps {
  src: string;
  loading: boolean;
  error: any;
  fetchBreedImage: (breed: string, subBreed?: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  media: {
    height: `calc(100% - 464px)`,
    paddingTop: "56.25%", // 16:9
    "&root": {
      backGroundSize: "contain",
    },
  },
}));

export const DogViewerContainer: FC<DogViewerProps> = ({
  location: { search },
  src,
  fetchBreedImage,
  error,
  history,
}) => {
  const classes = useStyles();
  const params = new URLSearchParams(search);
  const breed = params.get("breed") as string;
  const subBreed = params.get("subBreed") as string;
  const dogName = capitalizeSentence(`${breed} ${subBreed}`);
  useEffect(() => {
    fetchBreedImage(breed, subBreed);
  }, [breed, fetchBreedImage, subBreed]);
  return (
    <Card className={classes.root}>
      <CardHeader title={dogName} subheader="September 14, 2016" />
      {error ? <div className={classes.media}>Dog Image Not Found!</div> : <CardMedia className={classes.media} image={src} title={dogName} /> }
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            history.goBack();
          }}
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <ArrowBack />
        </IconButton>
      </CardActions>
    </Card>
  );
};
