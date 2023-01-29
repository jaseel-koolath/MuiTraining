import { Box } from "@mui/system";

const MuiLayout = () => {
  return (
    <>
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
    </>
  );
};

export default MuiLayout;
