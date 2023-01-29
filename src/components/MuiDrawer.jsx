import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MuiDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            Jaseel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
