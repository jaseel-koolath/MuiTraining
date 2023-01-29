import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='image unsplash'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body-2' color='text.secondary'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, at
            laborum? Saepe ipsam reprehenderit rem sint doloremque expedita
            corrupti voluptatibus laudantium ab asperiores odio aliquam fugiat
            minima, dolor adipisci temporibus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
