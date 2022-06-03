import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';
import Overlay from '../Components/Overlay';
import React, { useState,useEffect } from "react";
import { userRequest, publicRequest } from "../Axios/requestMethods";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';


const ListingCreation =()=> {
    
    const [cloud,setCloud] = useState("");
    const [preset,setPreset] = useState("");
    const [rate,setRate] = useState("");
    const [time,setTime] = useState("");
    const [amount,setAmount] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [poster,setPoster] = useState("");
    const [posterName,setPosterName] = useState("");
    const [photos,setPhotos] = useState([]);
    const [locErr,setLocErr] = useState("");
    const [retMessage,setRetMessage] = useState("");
    const [opn,setOpn] = useState(false);
    const [loc,setLoc] = useState({});

    const navigate = useNavigate();

    const loggedUser=useSelector((state)=>state.user.currentUser);


    
    useEffect( () => {
        const handler= async ()=>{
          const Cloud= await publicRequest.get('/auth/cloud');
          const Preset= await publicRequest.get('/auth/preset');
          setCloud(Cloud.data);
          setPreset(Preset.data);
          if (loggedUser) {
            setPoster(loggedUser._id);
            setPosterName(loggedUser.username);
          }else{
                  navigate('/login');
          }
        }
        handler();
      }, []);

    
      var myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloud,
          uploadPreset: preset,
          sources: [ 'local', 'url', 'camera', 'image_search'],
          clientAllowedFormats: ['jpg', 'png', 'jpeg'],
          maxFileSize: 1000000,
          cropping: true,
          showSkipCropButton: false,
          croppingAspectRatio: 1.67,
          gravity:'custom',
        },async (err,result)=>{
            if(result.event==='success'){
                try{
                    setPhotos(oldArray => [...oldArray, result.info.secure_url])
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


    const handleChange = (property) => {
      setPropertyType(property.target.value);
    };

    const handleClick=async (e)=>{
        e.preventDefault();
       const prod= await {
            rate: rate,
            time: time,
            propertyType: propertyType,
            area: amount,
            address: address,
            city: city,
            title: title,
            description: description,
            poster: poster,
            posterName: posterName,
            titlePhoto: photos[0],
            photos: photos
        }

        const res = await userRequest.post("/listing/createListing", prod);
        if(res.status===200){
          await setRetMessage("The Listing is created Successfully. Thank You for Listing with Us.");
          await setOpn(true);
        }}

        const handleLocation=async (e)=>{
            e.preventDefault();
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(showPosition, showError);
                } else {
                  console.log("Geolocation is not supported by this browser.")
                }

              function showPosition(position) {
                  setLoc(position.coords)
              }

              function showError(error) {
                switch(error.code) {
                  case error.PERMISSION_DENIED:
                    setLocErr("User denied the request for Geolocation.")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    setLocErr("Location information is unavailable.")
                    break;
                  case error.TIMEOUT:
                    setLocErr("The request to get user location timed out.")
                    break;
                  case error.UNKNOWN_ERROR:
                    setLocErr("An unknown error occurred.")
                    break;
                  default:
                    setLocErr("")
                }
            }
                
        };
        const editPhotos=async (i)=>{
            let tempArray=photos;
            await tempArray.splice(i,1);
            setPhotos([...tempArray]);
        }


  return (
      <>
      <Navbar />
    <AppBar position="static" sx={{backgroundColor: '#ffc13b', padding:'2% 7%', margin:'7% 0'}}>
      <Container maxWidth="md">
      
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'26px', color:'black', textAlign:'center' }}
                    >
                        <h4>List a New Property</h4>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>.</p>
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Rate in ₹" placeholder=" Charges per Month" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setRate(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Time in Months" placeholder="Time in Months" variant="outlined" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setTime(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Select Listing Type</InputLabel>
                            <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={propertyType}
                            label="Select Event Type"
                            onChange={handleChange}
                            sx={{backgroundColor:"white"}}
                            >
                            <MenuItem value={'Plot'}>Plot</MenuItem>
                            <MenuItem value={'House'}>House</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Area" placeholder="Enter the Area of plot/house in sq ft." fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setAmount(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Address" placeholder="Enter the Address" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setAddress(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="City" placeholder="Enter your City" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setCity(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Title" placeholder="Enter the Title" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setTitle(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Description"
                        style={{ width: '100%', whiteSpace: "preWrap"}}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={showWidget}>Upload Photos</Button>
                    </Grid>
                    {photos.map( (e, index) =>
                        <div key={index} >
                            <img src={ e } width="100px" alt={'img' + {index}}/>
                            <Button variant="contained" sx={{backgroundColor:"black", width:'70%'}} onClick={ ()=>{editPhotos(index)}}>X</Button>
                        </div>
        )}
        
                    <p>{opn}</p>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleLocation} >Set Location</Button>
                    </Grid>  
                    <p>{locErr}</p>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleClick} >Submit</Button>
                    </Grid>     
                </Grid>
            </form>
          </Toolbar>
          { opn ? <Overlay val={opn} ret={retMessage} />: null  }
      </Container>
    </AppBar>
    <BottomBar />
    <Footer />
    </>
  );
}
export default ListingCreation;