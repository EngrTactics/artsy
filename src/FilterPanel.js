import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  createTheme,
  FormControlLabel,
  Slider,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

const theme = createTheme({
  palette: {
    primary: { main: "#000", darker: "#222" },
  },
});

const FilterPanel = () => {
  const [value, setValue] = useState([0, 0]);
  const handleChange = (e, newValue, activeThumb) => {
    activeThumb = 10;
    setValue(newValue);
  };
  return (
    <div className="left hidden md:flex md:w-1/6 md:flex-col md:px-2 ">
      <div className="flex items-center space-x-3 border-b-2 border-b-black md:pb-2 md:mb-10">
        <FiFilter></FiFilter>
        <h1>Filter</h1>
      </div>
      <Accordion>
        <AccordionSummary expandIcon={<SlArrowDown></SlArrowDown>}>
          By Category
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox />}
            label="Editorials"
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Fashion"
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Optics"
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Art & Museum"
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Nature"
          ></FormControlLabel>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<SlArrowDown></SlArrowDown>}>
          By Price
        </AccordionSummary>
        <AccordionDetails>
          <ThemeProvider theme={theme}>
            <Slider
              className="w-full"
              value={value}
              min={10}
              max={150}
              onChange={handleChange}
              marks={true}
              size="medium"
              track="normal"
              step={14}
              color="primary"
              diasableSwap
            />
          </ThemeProvider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterPanel;
