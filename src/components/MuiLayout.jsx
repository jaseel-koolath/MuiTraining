import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";

const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction='row'
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
      <Box
        sx={{
          color: "white",
          backgroundColor: "purple",
          width: "300px",
          height: "300px",
          padding: "10px",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        MuiLayout
      </Box>
      <Box display='flex' width={50} height={50} bgcolor='yellow' p={2}>
        Mazha
      </Box>
    </Stack>
  );
};

export default MuiLayout;
