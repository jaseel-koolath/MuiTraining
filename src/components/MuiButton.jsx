import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          info
        </Button>
        <Button variant='contained' color='success'>
          success
        </Button>
        <Button variant='contained' color='error'>
          error
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>
          Primary
        </Button>
        <Button variant='text' color='secondary'>
          Secondary
        </Button>
        <Button variant='text' color='warning'>
          Warning
        </Button>
        <Button variant='text' color='info'>
          info
        </Button>
        <Button variant='text' color='success'>
          success
        </Button>
        <Button variant='text' color='error'>
          error
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          info
        </Button>
        <Button variant='outlined' color='success'>
          success
        </Button>
        <Button variant='outlined' color='error'>
          error
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='primary' size='small'>
          Primary
        </Button>
        <Button variant='contained' color='secondary' size='large'>
          Secondary
        </Button>
        <Button variant='contained' color='warning' size='medium'>
          Warning
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant='contained' disableElevation endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <IconButton color='success' size='small'>
        <SendIcon />
      </IconButton>
      <Stack direction='row' spacing={2} display='block'>
        <ButtonGroup variant='contained' size='large'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant='text'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' size='small'>
          <Button onClick={() => alert("hi")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row' spacing={2}>
        <ToggleButtonGroup
          value={formats}
          size='small'
          color='secondary'
          orientation='vertical'
          onChange={(event, updatedFormats) => {
            setFormats(updatedFormats);
          }}
          exclusive // to make it select only one, remove this for default
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
