import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';
import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/actions";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const [err, setErr] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error }= useSelector((state)=> state.user);
    const navigate = useNavigate();

    const loggedInUser=useSelector((state)=>state.user.currentUser);
    useEffect( () => {
        let path = `/adminPanel`; 
        if (loggedInUser) {
          setUser(loggedInUser); 
          navigate(path);
            }
         }, [loggedInUser]);

    const handleLogin=async (e)=>{
        e.preventDefault();
  // send the username and password to the server
        try{
           const x= await login(dispatch, { email, password });
        }catch(er){
            setErr("Check Email/ Password");
        }
    }

    const handleRegister=async (e)=>{
        e.preventDefault();
        navigate(`/register`);
    }

  return (
      <div>
      <Navbar />
      {/* <BasicOverlay disp={a} onClick={togler}  /> */}
    <Box position="static" sx={{backgroundColor: 'inherit', padding:'2% 7%', margin:'7% 0'}}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                    >
                        <h2>Login</h2>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'center' }}
                    >
                        <p>Come join in the community.</p>
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                            <Typography
                            component="span"
                            variant='body1'
                            sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                        >
                            Email
                            </Typography>
                        <TextField placeholder="Your Email" className="inputRounded" type="email" fullWidth sx={{backgroundColor:"white", borderRadius:'200px'}} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                            <Typography
                            component="span"
                            variant='body1'
                            sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                        >
                            Password
                            </Typography>
                        <TextField id="outlined-basic" className="inputRounded" placeholder="Password" type="password" variant="outlined" fullWidth sx={{backgroundColor:"white" }} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="secondary" autoCapitalize="none" type='submit' sx={{backgroundColor:"#ffc13b", height:'100%', width:'30%', borderRadius:5, textTransform: 'none' }} onClick={handleLogin}>
                            <Typography
                            component="span"
                            sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                        >
                            Login
                            </Typography>
                        </Button>
                    </Grid>
                    
                    <Grid item xs={12} md={12}>
                        <Button variant="Secondary" type='submit' sx={{backgroundColor:"#ffc13b", height:'100%', width:'30%', borderRadius:5, textTransform: 'none' }} onClick={handleRegister}>
                            <Typography
                                component="span"
                                sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                            >
                            Register Instead
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography
                            component="span"
                            sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'19px', color:'red', textAlign:'center' }}
                        >
                            <p>{err}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </Box>
    <BottomBar />
    <Footer />
    </div>
  );
};
export default Login;