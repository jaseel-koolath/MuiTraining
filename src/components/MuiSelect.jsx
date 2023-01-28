import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  console.log(country, countries);
  return (
    <Box width='250px'>
      <TextField
        label='country'
        select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='UK'>England</MenuItem>
      </TextField>
      <TextField
        label='country'
        select
        value={countries}
        onChange={(e) => {
          setCountries(e.target.value);
        }}
        fullWidth
        SelectProps={{ multiple: true }}
        size='small'
        color='secondary'
        helperText='Select country'
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='UK'>England</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
