import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
      <Link href='#'>Link</Link>
      <Link href='#' color='secondary' underline='hover'>
        Link
      </Link>
      <Typography variant='h6'>
        <Link href='#' color='secondary' underline='hover'>
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
