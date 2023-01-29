import { Autocomplete, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const skills = ["html", "css", "javascript", "react", "typescript"];

const MuiAutoComplete = () => {
  const [values, setValues] = useState(null);
  console.log(values);
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        value={values}
        // freeSolo
        onChange={(e, newValue) => setValues(newValue)}
        renderInput={(parameters) => (
          <TextField {...parameters} label='skills' />
        )}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
