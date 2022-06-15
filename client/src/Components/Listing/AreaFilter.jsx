import React,{ useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({childToArea}) {
  const [area, setArea] = useState('');

  const handleChange = (event) => {
    setArea(event.target.value);
    childToArea(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Area Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area}
          label="Area"
          onChange={handleChange}
        >
          <MenuItem value={500}>0 - 500 sq ft.</MenuItem>
          <MenuItem value={1000}>500 - 1000 sq ft.</MenuItem>
          <MenuItem value={2000}>1000 - 2000 sq ft.</MenuItem>
          <MenuItem value={2001}>2000+ sq ft.</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
