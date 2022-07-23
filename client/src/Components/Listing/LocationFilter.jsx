import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({childToLocation}) {
  const [criteria, setCriteria] = useState('India');

  const handleChange = (event) => {
    setCriteria(event.target.value);
    childToLocation(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={criteria}
          label="Filter"
          onChange={handleChange}
        > 
            <MenuItem value={'India'}>All India</MenuItem>
          <MenuItem value={'Andhra Pradesh'}>Andhra Pradesh</MenuItem>
          <MenuItem value={'Arunachal Pradesh'}>Arunachal Pradesh</MenuItem>
          <MenuItem value={'Assam'}>Assam</MenuItem>
          <MenuItem value={'Bihar'}>Bihar</MenuItem>
          <MenuItem value={'Chhattisgarh'}>Chhattisgarh</MenuItem>
          <MenuItem value={'Goa'}>Goa</MenuItem>
          <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
          <MenuItem value={'Haryana'}>Haryana</MenuItem>
          <MenuItem value={'Himachal Pradesh'}>Himachal Pradesh</MenuItem>
          <MenuItem value={'Jharkhand'}>Jharkhand</MenuItem>
          <MenuItem value={'Karnataka'}>Karnataka</MenuItem>
          <MenuItem value={'Kerala'}>Kerala</MenuItem>
          <MenuItem value={'Madhya Pradesh'}>Madhya Pradesh</MenuItem>
          <MenuItem value={'Maharashtra'}>Maharashtra</MenuItem>
          <MenuItem value={'Manipur'}>Manipur</MenuItem>
          <MenuItem value={'Meghalaya'}>Meghalaya</MenuItem>
          <MenuItem value={'Mizoram'}>Mizoram</MenuItem>
          <MenuItem value={'Nagaland'}>Nagaland</MenuItem>
          <MenuItem value={'Odisha'}>Odisha</MenuItem>
          <MenuItem value={'Punjab'}>Punjab</MenuItem>
          <MenuItem value={'Rajasthan'}>Rajasthan</MenuItem>
          <MenuItem value={'Sikkim'}>Sikkim</MenuItem>
          <MenuItem value={'Tamil Nadu'}>Tamil Nadu</MenuItem>
          <MenuItem value={'Telangana'}>Telangana</MenuItem>
          <MenuItem value={'Tripura'}>Tripura</MenuItem>
          <MenuItem value={'Uttar Pradesh'}>Uttar Pradesh</MenuItem>
          <MenuItem value={'Uttarakhand'}>Uttarakhand</MenuItem>
          <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
          <MenuItem value={'Delhi'}>Delhi</MenuItem>
          <MenuItem value={'Jammu and Kashmir'}>Jammu & Kashmir</MenuItem>
          <MenuItem value={'Lakshadweep'}>Lakshadweep</MenuItem>
          <MenuItem value={'Puducherry'}>Puducherry</MenuItem>
          <MenuItem value={'Andaman & Nicobar'}>Andaman & Nicobar</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
