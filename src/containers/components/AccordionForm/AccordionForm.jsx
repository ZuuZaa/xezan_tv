import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const AccordionForm = ({ header, children}) => {
  return (
    <Accordion sx={{ boxShadow: 0 }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionForm;