import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField variant='outlined' label='Name' />
        <TextField variant='filled' label='Name' />
        <TextField variant='standard' label='Name' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField variant='outlined' label='Name' size='small' />
        <TextField
          variant='filled'
          label='password'
          type='password'
          color='secondary'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={value ? "Do not share" : "Required"}
        />
        <TextField
          variant='standard'
          label='Name'
          required
          helperText='put your first name'
        />
        <TextField
          variant='standard'
          label='Name'
          required
          inputProps={{ readOnly: true }}
          helperText='put your first name'
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          variant='outlined'
          label='amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          variant='filled'
          label='weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
          }}
        />
        <TextField
          variant='outlined'
          type='password'
          label='password'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
