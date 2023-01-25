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
import { useState, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { FiFilter } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

const theme = createTheme({
  palette: {
    primary: { main: "#000", darker: "#222" },
  },
});

const FilterPanel = () => {
  const [value, setValue] = useState([0, 0]);
  const {
    isFilterOpen,
    setIsFilterOpen,
    selectedValue,
    setSelectedValue,
    filterProduct,
  } = useContext(FilterContext);
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
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<SlArrowDown></SlArrowDown>}>
          By Category
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  filterProduct(e, "editorial");
                }}
                value="editorial"
                checked={selectedValue === "editorial"}
              />
            }
            label="Editorials"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  filterProduct(e, "fashion");
                }}
                value="fashion"
                checked={selectedValue === "fashion"}
              />
            }
            label="Fashion"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  filterProduct(e, "optics");
                }}
                value="optics"
                checked={selectedValue === "optics"}
              />
            }
            label="Optics"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  filterProduct(e, "art");
                }}
                value="art"
                checked={selectedValue === "art"}
              />
            }
            label="Art & Museum"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  filterProduct(e, "nature");
                }}
                value="nature"
                checked={selectedValue === "nature"}
              />
            }
            label="Nature"
          ></FormControlLabel>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
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
