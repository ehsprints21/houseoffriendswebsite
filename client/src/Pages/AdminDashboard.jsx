import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
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

      const handleEditDocuments= ()=>{
        if (loggedUser) {
            navigate(`/fileUploads`);
          }
      }
      

      const handleDetail= ()=>{
        setUser(loggedUser);
        // console.log(user);
      }


    return(
        <div>
            <Navbar />
            <Box sx={{ display:'block'}}>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleLogout} >Logout</Button>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleSessionCreation} >Add Listing</Button>
                <Button variant="contained dark" sx={{ display:'none', margin:'4%'}} onClick={handleDetail}>Your Details</Button>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleSessionDeletion} >Your Listing</Button>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleOffers} >View Offers</Button>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleEditDetail} >Edit your Details</Button>
                <Button variant="contained dark" sx={{ display:'inline-block', margin:'4%'}} onClick={handleEditDocuments} >Add Documents</Button>
            </Box>
            <Box sx={{height:'25rem', display:'block', textAlign:'left', padding:"2% 30%"}}>
              <Card variant='elevation' elevation={4} sx={{ minWidth:325, maxWidth:325, margin:'5%', padding:'0' }}>
                <CardContent sx={{minWidth:325, minHeight:50, maxHeight:150, padding:'0 5%', backgroundColor:'black'}}>
                  <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%'}}>
                    {user.username}
                  </Typography>
                </CardContent>
                <CardContent sx={{maxWidth:325, height:75, maxHeight:75, padding:'4%', backgroundColor:'white'}}>
                  <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'left'}}>
                    <em>
                    <b>Email - </b>{user.email}
                    </em><br />
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <BottomBar />
            <Footer />
        </div>
    )
}
export default Board;