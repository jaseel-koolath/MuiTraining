import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MuiAccordion = () => {
  const [exp, setExp] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExp(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={exp === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary id='panel-header' expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum
            illo mollitia officia quo animi consequuntur voluptatibus incidunt
            quos aliquid! Quae voluptatem quidem, optio pariatur atque tempora
            inventore. Tempora, molestias.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={exp === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary id='panel2-header' expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum
            illo mollitia officia quo animi consequuntur voluptatibus incidunt
            quos aliquid! Quae voluptatem quidem, optio pariatur atque tempora
            inventore. Tempora, molestias.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={exp === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary id='panel3-header' expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum
            illo mollitia officia quo animi consequuntur voluptatibus incidunt
            quos aliquid! Quae voluptatem quidem, optio pariatur atque tempora
            inventore. Tempora, molestias.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
