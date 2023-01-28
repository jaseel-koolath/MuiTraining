import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false);
  console.log(accept);
  const [skills, setSkills] = useState([]);
  const handleSkill = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) setSkills([...skills, e.target.value]);
    else setSkills(skills.filter((skill) => skill !== e.target.value));
  };
  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept the T & C'
          control={
            <Checkbox
              size='small'
              color='secondary'
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={(e) => setAccept(e.target.checked)}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              value='html'
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label='JavaScript'
              value='js'
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkill}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Hi</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
