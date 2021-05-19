import { Button, Grid, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FC, useState } from "react";
import { BREED_DATA } from "../../stores/dog/actions";
import capitalizeSentence from "../../utils/capitalize-sentence";

export interface BreedSelectorProps {
  breedData: BREED_DATA;
  disabled: boolean;
  onSelectBreed: ({
    breed,
    subBreed,
  }: {
    breed: string;
    subBreed: string;
  }) => {};
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  }
}));

export const BreedSelector: FC<BreedSelectorProps> = ({
  breedData,
  onSelectBreed,
  disabled
}) => {
  const classes = useStyles()
  const [breed, setBreed] = useState("");
  const [subBreed, setSubBreed] = useState("");
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={breed}
            onChange={(e) => setBreed(e.target.value as string)}
            label="Breed"
            placeholder="Select Breed"
          >
            {Object.keys(breedData).map((breed) => (
              <MenuItem key={breed} value={breed}>
                {capitalizeSentence(breed)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {!!breedData[breed]?.length && (
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Sub Breed
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={subBreed}
              onChange={(e) => setSubBreed(e.target.value as string)}
              label="Sub breed"
              placeholder="Select Subbreed"
            >
              {breedData[breed].map((subBreedItem) => (
                <MenuItem key={subBreedItem} value={subBreedItem}>
                  {capitalizeSentence(subBreedItem)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {breed && (
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={() => onSelectBreed({ breed, subBreed })}
          >
            Go
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
