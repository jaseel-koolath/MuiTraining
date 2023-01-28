import { Favorite, FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(3);
  console.log(value);
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={(e, newvlaue) => setValue(newvlaue)}
        precision={0.5}
        size='large'
        icon={<Favorite fontSize='inherit' color='secondary' />}
        emptyIcon={<FavoriteBorder fontSize='inherit' />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
