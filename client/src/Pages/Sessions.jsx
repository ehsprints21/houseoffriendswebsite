import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';
import React, { useState,useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { publicRequest } from "../Axios/requestMethods";
import { Link } from 'react-router-dom';

function MediaCard(props) {

    return (
      <Card variant='elevation' elevation={4} sx={{ minWidth:300, maxWidth:300, margin:'5%', padding:'2.5%', backgroundColor:'#F5F5F5' }}>
          <CardMedia
            component="img"
            height='175'
            width='100%'
            image={props.photo}
            alt="Product Photo"
      />
          <CardContent sx={{minWidth:300, minHeight:75, maxHeight:100, padding:'0 2.5%'}}>
            <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%', textAlign:'left'}}>
              <b>{props.rate}</b>
            </Typography>
          </CardContent>
          <CardContent sx={{minWidth:300, padding:'2% 5%'}}>
            <Typography variant="body-1" flexWrap component="div" sx={{color:'text.secondary', padding:'1%', textAlign:'left'}}>
              <em>{props.title}</em>
            </Typography>
          </CardContent>
        <CardContent sx={{maxWidth:300, height:25, maxHeight:25, padding:'1%'}}>
          <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'right'}}>
            <em>
              {props.city}
            </em>
          </Typography>
        </CardContent>
      </Card>
    );
  }

const Listing = () =>{

  const [listings,setListings] = useState([{}]);
  
  useEffect(()=>{
    const getListings = async ()=>{
      const res = await publicRequest.get(`/listing/showListingsAll`);
      setListings(res.data);
    }
    getListings()
  },[]);

    return(
            <Grid container spacing={1} alignItems="center">
            <Navbar />
            <Grid item xs={12} md={12}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Plots
                        </Typography>
            </Grid>

            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
              {(listings.length===0)?<Grid item xs={12} md={6} lg={4} >
                    
                    <MediaCard photo={'https://res.cloudinary.com/dhhx4amh9/image/upload/v1654141765/vkdo18urwpimv6ibetv2.png'}
                                                rate={"listings "} 
                                                title={"coming soon"} 
                                                city={""} 
                                                 />
                                                </Grid>
                                                :
                                                <>
                    {listings.map((item, index) =><Grid item xs={12} md={6} lg={4} key={index} >
                    <Link style={{ textDecoration: 'none' }} to={`/Product/${item._id}`}>
                    <MediaCard photo={item.titlePhoto}
                                                rate={'₹ '+ item.rate} 
                                                title={item.title} 
                                                city={item.city} 
                                                 />
                                                </Link>
                                                </Grid>
                                                )}
                                                </>
               } 
              </Grid>
            </Box>
                <BottomBar />
              <Footer />
            </Grid>
    )
}
export default Listing;