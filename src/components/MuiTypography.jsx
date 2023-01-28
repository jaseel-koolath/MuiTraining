import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      {/* To Add a margin to bottom specify gutterbottom value
      Margin height depend on the variant */}
      <Typography variant='h3' gutterBottom>
        h3 Heading
      </Typography>
      {/* We can also mention the component name if you want to
      eventhough the styling is same underlying tag will be changed */}
      <Typography variant='h4' component='h1'>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>

      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        obcaecati impedit consequuntur accusantium hic voluptatibus vitae a.
        Provident, eos illum ratione porro culpa ab sed eligendi iste ea
        veritatis perferendis!
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque aliquid
        dolores, doloribus, recusandae totam accusantium debitis quidem aliquam
        labore assumenda, magni ad voluptate? Recusandae inventore nisi alias
        cum aut deleniti.
      </Typography>
    </div>
  );
};

export default MuiTypography;
