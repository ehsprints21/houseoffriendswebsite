import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import React, { useState,useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userRequest } from "../Axios/requestMethods";

function MediaCard(props) {
    
    const deleteSession= async (e)=>{
        await userRequest.delete(`/listing/${e}`)
        window.location.href='/sessionsDelete'
    }
    return (
      <Card variant='elevation' elevation={4} sx={{ minWidth:325, maxWidth:325, margin:'5%', padding:'0' }}>
          <CardMedia
            component="img"
            height='200'
            width='100%'
            image={props.photo}
            alt="Product Photo"
        />
          <CardContent sx={{minWidth:325, minHeight:75, maxHeight:100, padding:'0 2.5%', backgroundColor:'white'}}>
            <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%', textAlign:'left'}}>
              <b>{props.rate}</b>
            </Typography>
          </CardContent>
          <CardContent sx={{minWidth:325, padding:'2% 5%', backgroundColor:'white'}}>
            <Typography variant="body-1" flexWrap component="div" sx={{color:'text.secondary', padding:'1%', textAlign:'left'}}>
              <em>{props.title}</em>
            </Typography>
          </CardContent>
        <CardContent sx={{maxWidth:325, height:25, maxHeight:25, padding:'1%', backgroundColor:'white'}}>
          <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'right'}}>
            <em>
              {props.city}
            </em>
          </Typography>
        </CardContent>
        <Button fullWidth size="large" onClick={() => deleteSession(props.identity)} sx={{textAlign:'center', backgroundColor:'#ffc13b', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'} }}>
          <Typography variant="h6" color="text.secondary">
            Delete <ArrowRightAltIcon sx={{position:'relative', top:'5px'}}/>
          </Typography>
        </Button>
      </Card>
    );
  }

const SessionDeletion = () =>{
  const loggedUser=useSelector((state)=>state.user.currentUser);
  const [listings,setListings] = useState([{}]);
  
  useEffect(()=>{
    const getListings = async ()=>{
      const res = await userRequest.get(`/listing/showMyListings/${loggedUser._id}`);
      setListings(res.data);
    }
    getListings()
  },[]);

    return(
            <Grid container spacing={1} alignItems="center">
            <Navbar />
            <Grid item xs={12} md={12}  >
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Listings
                        </Typography>
            </Grid>

            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
                
                    {listings.map((item, index) =><Grid item xs={12} md={6} lg={4} key={index} >
                    <MediaCard photo={item.titlePhoto}
                                                rate={'₹ '+ item.rate} 
                                                title={item.title} 
                                                city={item.city} 
                                                identity={item._id}
                                               />
                                                
                                                </Grid>
                                                )}
                
              </Grid>
            </Box>
                <BottomBar />
            </Grid>
    )
}
export default SessionDeletion;