import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { publicRequest } from "../Axios/requestMethods";


const Register = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleRegister=async (e)=>{
        e.preventDefault();
        const user = { username, email, password };
  // send the username and password to the server
        try{
            const res = await publicRequest.post(`/auth/registration`, user);
                if(res.data!=="User created Successfully."){
                    setError(res.data)
                }else{
                    window.location.href='/login'
                }
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
                        <h3>Register</h3>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>Register to become a member.</p>
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" className="inputRounded" label="User Name" placeholder="Your User Name" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setUsername(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" className="inputRounded" label="Email Id" placeholder="Enter Your Email" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" className="inputRounded" label="Password" placeholder="Password" type="password" variant="outlined" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    
                    
                    <Grid item xs={12} md={12}>
                        <Button variant="Secondary" type='submit' sx={{backgroundColor:"#ffc13b", width:'30%', height:'100%', borderRadius:5  }} onClick={handleRegister}>
                            <Typography
                                component="span"
                                sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                            >
                            Register Instead
                            </Typography>   
                        </Button>
                    </Grid>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'19px', color:'red', textAlign:'center' }}
                    >
                        <p>{error}</p>
                    </Typography>
                    
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </AppBar>
    <BottomBar />
    </div>
  );
};
export default Register;