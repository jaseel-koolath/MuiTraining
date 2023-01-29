import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        maxItems={3}
        // itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
        separator={<NavigateNext fontSize='small' />}
      >
        <Link underline='hover' href='#'>
          Home
        </Link>
        <Link underline='hover' href='#'>
          Catelogue
        </Link>
        <Link underline='hover' href='#'>
          Accessories
        </Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
