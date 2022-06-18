import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Overlay from '../Components/CommonComponents/Overlay';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
    const [pass, setPass] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState();
    const [error, setError] = useState("");
    const [retMessage,setRetMessage] = useState("");
    const [opn,setOpn] = useState(false);

    const loggedUser=useSelector((state)=>state.user.currentUser);

    const handleDetails= async (e)=>{
        e.preventDefault();
        const userDetails = { email, oldPass, newPass };
  // send the username and password to the server
        try{
            const res = await userRequest.put(`/user/updateUserInfos/${loggedUser._id}`, userDetails);
            if(res.status===200){
                await setRetMessage("The Password is Changed Successfully.");
                await setOpn(true);
              }
            
        }catch(err){
            console.log(err);
        } 
    }

    const handleName= async (e)=>{
        e.preventDefault();
        const userDetails = await { email, name, pass };
  // send the username and password to the server
        try{
            const res = await userRequest.put(`/user/updateUserName/${loggedUser._id}`, userDetails);
            if(res.status===200){
                await setRetMessage("The UserName is Changed Successfully.");
                await setOpn(true);
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
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Change Your User Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography

                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <h3>Fill in new Details. Change reflects the next Login</h3>
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
                        <TextField id="outlined-basic" label="New User Name" placeholder="Your Name" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Password" placeholder="PassWord" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setPass(e.target.value)}/>
                    </Grid>
                    
                    <Grid item xs={12} md={12}>
                        <Button variant="Secondary" type='submit' sx={{backgroundColor:"#ffc13b", width:'30%', height:'100%', borderRadius:5, textTransform: 'none' }} onClick={handleName}>
                            <Typography
                                component="span"
                                sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                            >
                            Submit
                            </Typography>
                        </Button>
                    </Grid> 
                </Grid>
            </form>
          </Toolbar>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-password"
          id="panel1-password"
        >
          <Typography>Change Your Password</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                        <Button variant="Secondary" type='submit' sx={{backgroundColor:"#ffc13b", width:'30%', height:'100%', borderRadius:5, textTransform: 'none' }} onClick={handleDetails}>
                            <Typography
                                component="span"
                                sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                            >
                            Submit
                            </Typography>
                        </Button>
                    </Grid> 
                </Grid>
            </form>
          </Toolbar>
        </AccordionDetails>
      </Accordion>
      
    </div>
        
      </Container>
      { opn ? <Overlay val={opn} ret={retMessage} />: null  }
    </AppBar>
    <BottomBar />
    </div>
  );
};
export default Finances;