import '../App.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from "axios";
import { publicRequest } from "../Axios/requestMethods";
const MailList = () => {

    const [emailId, setEmailId] = useState("");
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("");
    const [user, setUser] = useState();



    const handleChange = (event) => {
        setUserType(event.target.value);
    };

    const handleLogin=async (e)=>{
        
        const user = { name, emailId, userType };
  // send the username and password to the server
        const res = await publicRequest.post(`/email/createEmail`,user);
        
        
        //console.log (res.data);
        window.location.reload(true);
    }

  return (
    <AppBar position="static" sx={{backgroundColor: '#ffc13b', padding:'2% 7%'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography

                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <h3>JOIN OUR MAIL LIST</h3>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>Subscribe our channel to get latest update on careers, exams and many more</p>
                    </Typography>
                        
                        
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField id="outlined-basic" placeholder="Your Name" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setEmailId(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField id="outlined-basic" placeholder="Email Id" variant="outlined" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">You Are</InputLabel>
                            <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={ userType }
                            label="You Are"
                            onChange={handleChange}
                            sx={{backgroundColor:"white"}}
                            >
                            <MenuItem value={'Lender'}>Lender</MenuItem>
                            <MenuItem value={'Borrower'}>Borrower</MenuItem>
                            <MenuItem value={'Guest'}>Guest</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleLogin} >Submit</Button>
                    </Grid>
                    
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MailList;