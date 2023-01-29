import { Divider, Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
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
      <Grid container rowSpacing={2} columnSpacing={2} my={4}>
        <Grid item xs={12} sm={3}>
          <Box bgcolor='blue' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box bgcolor='yellow' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='green' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='purple' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
