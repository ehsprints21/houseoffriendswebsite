import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import MapDisplay from '../Components/ProductPage/MapDisplay';
import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import { publicRequest, userRequest } from "../Axios/requestMethods";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Product = () =>{
  const [listing,setListing] = useState({});
  const [pics, setPics] = useState([]);
  const [location, setLocation] = useState(null);
  const [picVal, setPicVal] = useState(0);
  const loggedUser=useSelector((state)=>state.user.currentUser);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(()=>{
    const getListings = async ()=>{
      const res = await publicRequest.get(`/listing/showListing/${id}`);
      setListing(res.data);
      setLocation(res.data.latLon);
      setPics(res.data.photos);
      if(res.data.photos.length===0){
        setPics(['https://res.cloudinary.com/dhhx4amh9/image/upload/v1654141765/vkdo18urwpimv6ibetv2.png'])
      }
    }
    getListings()
  },[id]);

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
    const k = await {senderId:id1, receiverId:id2, product:id }
    await userRequest.post(`/conversations/`, k);
    navigate('/offerChats');
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

                  {pics.map((item, index) =><FiberManualRecordIcon />)}
                  
              </Grid>
              <Grid item xs={1.5} md={1}>
                  <Button sx={{textAlign:'center', backgroundColor:'inherit' }} onClick={handleClickFront}>
                      <ArrowForwardIcon />
                  </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                    
                      <Card variant='elevation' elevation={1} sx={{margin:'2%', padding:'4%' }}>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'left', color:'black', fontSize:30 }}
                            >
                              Rate - ₹ {listing.rate}
                        </Typography>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 4%', textAlign:'left', color:'black', fontSize:20 }}
                            >
                              Listed By-  {listing.posterName}
                        </Typography>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'0 4%', textAlign:'left', color:'text.secondary', fontSize:20 }}
                            >
                              {listing.title}
                        </Typography>
                        <Typography
                            variant="object-1"
                            component="div"
                            sx={{ mr: 2,  padding:'0 4%', textAlign:'left', color:'text.secondary', fontSize:20 }}
                            >
                              City - {listing.city}
                        </Typography>
                        <br/>
                        <Button size="sm" onClick={()=>handleClick(loggedUser._id, listing.poster)} sx={{textAlign:'left', backgroundColor:'#ffc13b', width:'70%', textTransform: 'none', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'}} }>
                          <Typography variant="h6" color="text.secondary">
                            Contact
                          </Typography>
                        </Button>
                      </Card>
                      
            </Grid>
            <Grid item xs={12} md={7}>
                <Card variant='elevation' elevation={1} sx={{margin:'2%', padding:'0', minHeight:550 }}>
                <Typography
                            variant="h4"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'left', color:'text.secondary' }}
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
            <Grid item xs={12} md={5}>
              <Card variant='elevation' elevation={1} sx={{margin:'2%', padding:'4%' }}>
                { (location) ? <MapDisplay Latitude={listing.latLon.lat} Longitude={listing.latLon.lng}/> : null }
              </Card>
            </Grid>


            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
              </Grid>
            </Box>
                <BottomBar />
            </Grid>
    )
}
export default Product;