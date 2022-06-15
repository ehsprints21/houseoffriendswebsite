import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { userRequest } from "../Axios/requestMethods";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Finances = () => {
    
    const navigate = useNavigate();
    const [newPass, setNewPass] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState();
    const [error, setError] = useState("");

    const loggedUser=useSelector((state)=>state.user.currentUser);

    const handleDetails= async (e)=>{
        e.preventDefault();
        const userDetails = { email, oldPass, newPass };
  // send the username and password to the server
        try{
            const res = await userRequest.put(`/user/updateUserInfos/${loggedUser._id}`, userDetails);
            console.log(res);
        }catch(err){
            console.log(err);
        } 
    }
    
  return (
      <div>
      <Navbar />
    <AppBar position="static" sx={{backgroundColor: 'white', padding:'2% 7%', margin:'7% 0'}}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography

                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <h3>Edit/Fill in new Details</h3>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="User Account Email" placeholder="Account Email" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Old Password" placeholder="Old PassWord" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setOldPass(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="New Password" placeholder="Your New Password." variant="outlined" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setNewPass(e.target.value)} />
                    </Grid>
                    
                    
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"#ffc13b", width:'70%', height:'100%', borderRadius:5, textTransform: 'none' }} onClick={handleDetails}>Submit</Button>
                    </Grid> 
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </AppBar>
    <BottomBar />
    <Footer />
    </div>
  );
};
export default Finances;