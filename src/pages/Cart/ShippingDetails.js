import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CartList from "./CartList";

const ShippingDetails = () => {
  const [country, setCountry] = useState("");
  const handleSelect = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="flex container px-5">
      <form action="" className="py-5 flex flex-col space-y-5 w-full">
        <div>
          <TextField
            variant="outlined"
            label="Your Email"
            fullWidth
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                label="Get updates about new drops and exclusive offers"
                size="small"
              />
            }
            label="Get updates about new drops and exclusive offers"
            sx={{ fontSize: "12px" }}
          ></FormControlLabel>
        </div>
        <FormControl>
          <InputLabel>Choose a Wallet</InputLabel>
          <Select label="Choose a Wallet">
            <MenuItem>Coinbase</MenuItem>
            <MenuItem>Phantom</MenuItem>
            <MenuItem>Metamask</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>City</InputLabel>
          <Select label="City">
            <MenuItem>Ilorin</MenuItem>
            <MenuItem>Abuja</MenuItem>
            <MenuItem>Jos</MenuItem>
            <MenuItem>Lagos</MenuItem>
            <MenuItem>Osun</MenuItem>
            <MenuItem>Anambra</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Country</InputLabel>
          <Select label="Country" onSelect={handleSelect} value={country}>
            <MenuItem>Netherlands</MenuItem>
            <MenuItem>Abuja</MenuItem>
            <MenuItem>South Africa</MenuItem>
            <MenuItem>Russia</MenuItem>
            <MenuItem>China</MenuItem>
            <MenuItem>Namibia</MenuItem>
          </Select>
        </FormControl>
        <TextField variant="outlined" label="Postal Code" fullWidth></TextField>
        <TextField
          variant="outlined"
          label="Phone Number"
          fullWidth
        ></TextField>
        <button className="mx-auto bg-[#3341C1] hover:bg-[#051076] text-white rounded-md px-10 py-3 cursor-pointer">
          Proceed to payment
        </button>

        <button className="mx-auto border-b-[1px] border-b-blue-500 text-blue-500">
          Back to cart
        </button>
      </form>
      <CartList custom="hidden md:block"></CartList>
    </div>
  );
};

export default ShippingDetails;
