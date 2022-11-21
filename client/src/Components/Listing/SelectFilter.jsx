import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ childToSelect }) {
  const [criteria, setCriteria] = useState("Latest");

  const handleChange = (event) => {
    setCriteria(event.target.value);
    childToSelect(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={criteria}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"Latest"}>Latest</MenuItem>
          <MenuItem value={"Increasing"}>Price (Low to High)</MenuItem>
          <MenuItem value={"Decreasing"}>Price (High to Low)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
