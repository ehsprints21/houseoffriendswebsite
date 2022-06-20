import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ButtonCard from '../Components/Dashboard/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions";

const Board=()=>{
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useState({});
  const loggedInUser=useSelector((state)=>state.user.currentUser);
  
  useEffect( () => {
    if (loggedInUser!=null) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      setLoggedUser(foundUser);
    }else{
      navigate('/login');
    }
  }, []);

      const handleLogout= async ()=>{
       await logout(dispatch);
       window.location.href='/';
      }

      const handleSessionCreation= ()=>{
        if (loggedUser) {
            navigate(`/sessionCreation`);
          }
      }

      const handleSessionDeletion= ()=>{
        if (loggedUser) {
            navigate(`/sessionsDelete`);
          }
      }

      const handleOffers= ()=>{
        if (loggedUser) {
            navigate(`/offerChats`);
          }
      }

      const handleEditDetail= ()=>{
        if (loggedUser) {
            navigate(`/editDetails`);
          }
      }

      // const handleEditDocuments= ()=>{
      //   if (loggedUser) {
      //       navigate(`/fileUploads`);
      //     }
      // }
      

      const handleDetail= ()=>{
        setUser(loggedUser);
      }


    return(
        <div>
            <Navbar />
            <Box sx={{height:'80vh'}}>
              <Grid container spacing={1} sx={{marginTop:5}}>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" sx={{color:'black', textAlign:'center', padding:'2% 20%'}}>
                      Dashboard
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" sx={{color:'black', textAlign:'center', padding:'2% 15%'}}>
                      {user.username}
                    </Typography>
                  </Grid>
              </Grid>
              <Box sx={{ display:'block', paddingTop:15}}>
                  <Button variant="contained dark" sx={{ display:'inline-block', margin:'1%'}} onClick={handleSessionCreation} ><ButtonCard Title="Add Listing" Photo="..\assets\map-marker-plus.png"></ButtonCard></Button>
                  <Button variant="contained dark" sx={{ display:'none', margin:'2%'}} onClick={handleDetail} ><ButtonCard Title="Your Details" Photo="..\assets\about-page\map-marker.png"></ButtonCard></Button>
                  <Button variant="contained dark" sx={{ display:'inline-block', margin:'1%'}} onClick={handleSessionDeletion} ><ButtonCard Title="Your Listing" Photo="..\assets\map-marker.png"></ButtonCard></Button>
                  <Button variant="contained dark" sx={{ display:'inline-block', margin:'1%'}} onClick={handleOffers} ><ButtonCard Title="View Offers" Photo="..\assets\comment-alt.png"></ButtonCard></Button>
                  <Button variant="contained dark" sx={{ display:'inline-block', margin:'1%'}} onClick={handleEditDetail} ><ButtonCard Title="Edit Details" Photo="..\assets\Asset 10NPOCA Website.png"></ButtonCard></Button>
                  {/* <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleEditDocuments} ><ButtonCard Title="Add Documents"></ButtonCard></Button> */}
              </Box>
              <Box sx={{ display:'block', marginTop:'2%'}}>
              <Button variant="secondary" autoCapitalize="none" type='submit' sx={{backgroundColor:"#ffc13b", height:'100%', width:'10%', borderRadius:5, textTransform: 'none' }} onClick={handleLogout} >
                Logout
              </Button>
              </Box>
            </Box>
            
            <BottomBar />
        </div>
    )
}
export default Board;