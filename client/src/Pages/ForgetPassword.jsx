import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
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
import { publicRequest } from '../Axios/requestMethods';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const [err, setErr] = useState("");
    const [val, setVal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggedInUser=useSelector((state)=>state.user.currentUser);
    useEffect( () => {
        const handler= async ()=>{
            let path = `/adminPanel`; 
        if (loggedInUser) {
          await setUser(loggedInUser);
        //   navigate(path);
          window.location.href = "/adminPanel";
            }else{
                if(val){
                    setErr("Check Email/ Password");
                }
            }
        }
        handler();
         }, [loggedInUser, val]);

    const handleForget=async (e)=>{
        e.preventDefault();
        const res = await publicRequest.post(`/email/resetPassword`, {email: email});
        console.log(res);
        if(res.data==='No Such User Exists on System'){
            setErr(res.data);
        }else{
            setErr('Password sent.');
        }
        
        setVal(true);
        try{
           
           
        }catch(er){
            setErr("Check Email");
        }
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
                        <h2>Forget Password</h2>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'center' }}
                    >
                        <p>Please Enter your password, we will email your new credentials.</p>
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
                        <Button variant="secondary" autoCapitalize="none" type='submit' sx={{backgroundColor:"#ffc13b", height:'100%', width:'30%', borderRadius:5, textTransform: 'none' }} onClick={handleForget}>
                            <Typography
                            component="span"
                            sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                        >
                            Request Password
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
    </div>
  );
};
export default Login;