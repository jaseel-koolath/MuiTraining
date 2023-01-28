import { FormControlLabel, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        label='Dark Mode'
        control={
          <Switch
            checked={checked}
            color='success'
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
