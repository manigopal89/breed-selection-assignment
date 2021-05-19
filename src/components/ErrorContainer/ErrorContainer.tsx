import { Button, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";

export interface ErrorContainerProps {
  title: string;
  subTitle: string;
  onBackClick: () => void;
}

export const ErrorContainer: FC<ErrorContainerProps> = ({
  title,
  subTitle,
  onBackClick
}) => {
  return (
    <div>
      <Paper>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
        <Button onClick={() => onBackClick()}>Go Back</Button>
      </Paper>
    </div>
  );
};
