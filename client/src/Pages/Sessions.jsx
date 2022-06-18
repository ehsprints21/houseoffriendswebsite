import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import Filter from '../Components/Listing/SelectFilter';
import AreaFilter from '../Components/Listing/AreaFilter';
import LocationFilter from '../Components/Listing/LocationFilter';
import MediaCard from '../Components/Listing/ListingCard';
import React, { useState,useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { publicRequest } from "../Axios/requestMethods";
import { Link } from 'react-router-dom';


const Listing = () =>{

  const [listings,setListings] = useState([{}]);
  const [tempListings,setTempListings] = useState([{}]);
  const [area, setArea] = useState('');
  const [criteria, setCriteria] = useState('');
  const [location, setLocation] = useState('');
  
  useEffect(()=>{
    const getListings = async ()=>{
      const res = await publicRequest.get(`/listing/showListingsAll`);
      setListings(res.data);
      setTempListings(res.data);
      console.log(res.data);
    }
    getListings()
  },[]);

  //--------------filters taken care of----------------
  useEffect(()=>{
    const filtered = async ()=>{
      if (criteria==='Increasing'){
        var obj = await [...listings]
        await obj.sort((a,b) =>{ return a.rate - b.rate});
        await setListings([...obj])
        console.log(obj);
      }else if(criteria==='Decreasing'){
        var obj2 = await [...listings]
        await obj2.sort((a,b) =>{ return b.rate - a.rate});
        await setListings([...obj2])
        console.log(obj2);
      }else if(criteria==='Latest'){
        var obj3 = await [...listings]
        await obj3.sort((a,b) =>{ return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()});
        await setListings([...obj3])
        console.log(obj3);
      }
    }
    filtered()
  },[criteria])

  //------------------Area Filters Taken Care Of---------\
  useEffect(()=>{
    const areaFilter=async ()=>{
      
      let objArea= await tempListings
      switch(area) {
        case 500:
          // code block
          objArea = await objArea.filter(obj => obj.area <= 500);
          await setListings([...objArea]);
          console.log(objArea.length);
          break;
        case 1000:
          // code block
          objArea = await objArea.filter(obj => obj.area > 500 && obj.area <= 1000);
          await setListings([...objArea]);
          break;
        case 2000:
            // code block
            objArea = await objArea.filter(obj => obj.area > 1000 && obj.area <= 2000);
            await setListings([...objArea]);
          break;
        case 2001:
            // code block
            objArea = await objArea.filter(obj => obj.area > 2000);
            await setListings([...objArea]);
          break;
        default:
          await objArea.filter(obj => obj.area > 0);
          await setListings([...objArea]);
          // code block
      }
    }
    areaFilter();
  },[area])

  //--------------------HAndling State select filter
  useEffect(()=>{
    const filteredLocation = async ()=>{
      let objLoc = await [...tempListings]
      if (location==='India'){
        await setListings([...objLoc])
      }else{
        objLoc = await objLoc.filter(obj => obj.state === location);
        await setListings([...objLoc])
        console.log(objLoc);
      }
    }
    filteredLocation()
  },[location])

  const childToArea=async (childdata)=>{
    await setArea(childdata);
  }
  const childToSelect=async (childdata)=>{
    await setCriteria(childdata);
  }
  const childToLocation=async (childdata)=>{
    await setLocation(childdata);
  }

    return(
            <>
            <Navbar />

            <Grid container spacing={1} alignItems="center" sx={{minHeight:'90vh'}}>
            {/* <Grid item xs={12} md={12}>
                        
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'1% 2%', textAlign:'center', color:'#FFB923' }}
                            >
                                Plots
                        </Typography>
            </Grid> */}
            <Box width={'100%'} sx={{padding:'1% 10%'}}>
              <Grid container spacing={1}>
                <Grid item xs={3} md={3}>
                  <AreaFilter childToArea={childToArea} />
                </Grid>
                <Grid item xs={3} md={3}>
                  <LocationFilter childToLocation={childToLocation} />
                </Grid>
                <Grid item xs={3} md={3}>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Filter childToSelect={childToSelect}/>
                </Grid>
              </Grid>
              
            </Box>
            

            <Box width={'100%'} sx={{padding:'1% 15%'}}>
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
                                                time={item.createdAt}
                                                 />
                                                </Link>
                                                </Grid>
                                                )}
                                                </>
               } 
              </Grid>
            </Box>
                
            </Grid>
            <BottomBar />
            </>
    )
}
export default Listing;