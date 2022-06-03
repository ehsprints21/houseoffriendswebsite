import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { publicRequest, userRequest } from "../Axios/requestMethods";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const Product = () =>{
  const [listing,setListing] = useState({});
  const [pics, setPics] = useState([]);
  const [picVal, setPicVal] = useState(0);
  const loggedUser=useSelector((state)=>state.user.currentUser);

  const { id } = useParams();
  useEffect(()=>{
    const getListings = async ()=>{
      const res = await publicRequest.get(`/listing/showListing/${id}`);
      setListing(res.data);
      setPics(res.data.photos);
    }
    getListings()
  },[]);

  const handleClickBack=()=>{
      if(picVal>=1){
        setPicVal(picVal-1);
      }
  }

  const handleClickFront=()=>{
        if(picVal<pics.length-1){
            setPicVal(picVal+1);
        }
  }

  const handleClick=async (id1, id2)=>{
    
    // console.log(id1, id2);
    const k = await {senderId:id1, receiverId:id2, product:id }
    const res = await userRequest.post(`/conversations/`, k);
    // console.log(res);
  }

    return(
            <Grid container spacing={0} alignItems="center">
            <Navbar />
            <Grid item xs={1.5} md={1}>
                <Button sx={{textAlign:'center', backgroundColor:'inherit' }} onClick={handleClickBack}>
                    <ArrowBackIcon />
                </Button>
            </Grid>
            <Grid item xs={9} md={6}>
                <Card variant='elevation' elevation={4} sx={{margin:'5% 1%', padding:'0' }}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                      <CardMedia
                          component="img"
                          width='100%'
                          height='450'
                          image={pics[picVal]}
                          alt="Listing Photo"
                      />
                    </Box>

                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                      <CardMedia
                          component="img"
                          width='100%'
                          image={pics[picVal]}
                          alt="Listing Photo"
                      />
                    </Box>
                    
                </Card>
            </Grid>
            <Grid item xs={1.5} md={1}>
                <Button sx={{textAlign:'center', backgroundColor:'inherit' }} onClick={handleClickFront}>
                    <ArrowForwardIcon />
                </Button>
            </Grid>
            <Grid item xs={12} md={4}>
                      <Card variant='elevation' elevation={1} sx={{margin:'2%', padding:'4%' }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ mr: 2,  padding:'5% 5%', textAlign:'left', color:'#FFB923' }}
                            >
                              ₹ {listing.rate}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'5% 5%', textAlign:'center', color:'text.secondary' }}
                            >
                              By-  {listing.posterName}
                        </Typography>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'0 4%', textAlign:'left', color:'black', fontSize:20 }}
                            >
                              {listing.title}
                        </Typography>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'', textAlign:'right', color:'black', fontSize:20 }}
                            >
                              {listing.city}
                        </Typography>
                        <Button size="sm" onClick={()=>handleClick(loggedUser._id, listing.poster)} sx={{textAlign:'left', backgroundColor:'#ffc13b', width:'70%', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'}} }>
                          <Typography variant="h6" color="text.secondary">
                            Chat Now
                          </Typography>
                        </Button>
                      </Card>
            </Grid>
            <Grid item xs={12} md={7}>
                <Card variant='elevation' elevation={1} sx={{margin:'2%', padding:'0' }}>
                <Typography
                            variant="h4"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'center', color:'text.secondary' }}
                            style={{whiteSpace: 'pre-line'}}
                            >
                                Description
                        </Typography>
                        <Typography
                            variant="object-2"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'left', color:'text.secondary' }}
                            style={{whiteSpace: 'pre-line'}}
                            >
                                <b>Time</b>    - {listing.time} Mon
                                <br />
                                <b>Address</b> - {listing.address}
                                <br />
                                <b>Area</b> - {listing.area} sq. ft.
                                <br />
                        </Typography>
                        <Typography
                            variant="object-2"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'left', color:'text.secondary' }}
                            style={{whiteSpace: 'pre-line'}}
                            >
                                {listing.description}
                        </Typography>
                </Card>
            </Grid>


            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
              </Grid>
            </Box>
                <BottomBar />
              <Footer />
            </Grid>
    )
}
export default Product;