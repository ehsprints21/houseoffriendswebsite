import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { userRequest, publicRequest } from "../Axios/requestMethods";
import { useNavigate } from "react-router-dom";


const Finances = () => {

    const [cloud,setCloud] = useState("");
    const [preset,setPreset] = useState("");
    const navigate = useNavigate();
    const [item, setItem] = useState("");
    const [panCard, setPanCard] = useState("");
    const [salerySlips, setSalerySlips] = useState("");

    const [user, setUser] = useState();
    const [confirm, setConfirm] = useState("");

    useEffect( () => {
        const handler= async ()=>{
          const Cloud= await publicRequest.get('/auth/cloud');
          const Preset= await publicRequest.get('/auth/preset');
          setCloud(Cloud.data);
          setPreset(Preset.data);
        //   if (loggedUser) {
        //     setPoster(loggedUser._id);
        //     setPosterName(loggedUser.username);
        //   }else{
        //           navigate('/login');
        //   }
        }
        handler();
      }, []);

         var myWidget = window.cloudinary.createUploadWidget(
            {
              cloudName: cloud,
              uploadPreset: preset,
              sources: [ 'local', 'url', 'camera', 'image_search'],
              
            },async (err,result)=>{
                if(result.event==='success'){
                    try{
                        const res = await userRequest.put(`/user/updateDocuments/${user._id}`, {item:result.info.secure_url});
                        console.log(res);
                    }catch(err){
                        console.log(err);
                    } 
                      console.log(result);
                }
            }
          );
                const showWidget=(e)=>{
                e.preventDefault();
                myWidget.open();
            }
    
  return (
      <div>
      <Navbar />
    <AppBar position="static" sx={{backgroundColor: '#ffc13b', padding:'2% 7%', margin:'7% 0'}}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <h3>Fill in new Files</h3>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>Fill additional details to be able to ask for loans</p>
                    </Typography>
        
                    </Grid>
                   
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={showWidget}>PAN card</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={showWidget}>Aadhar Card</Button>
                    </Grid> 
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </AppBar>
    <BottomBar />
    </div>
  );
};
export default Finances;