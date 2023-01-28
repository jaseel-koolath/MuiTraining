import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Box>
      <FormControl>
        <FormLabel id='job-experience'>Years of Experience</FormLabel>
        <RadioGroup
          name='job-experience'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <FormControlLabel
            control={<Radio size='large' />}
            label='0-2'
            value='0-2'
          />
          <FormControlLabel
            control={<Radio color='secondary' />}
            label='3-5'
            value='3-5'
          />
          <FormControlLabel
            control={<Radio size='small' color='error' />}
            label='6-10'
            value='6-10'
          />
        </RadioGroup>
        <FormHelperText>Invalid</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
