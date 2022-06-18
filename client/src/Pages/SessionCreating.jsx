import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import Overlay from '../Components/CommonComponents/Overlay';
import MapRender from '../Components/ListingCreation.jsx/Map';
import React, { useState,useEffect } from "react";
import { userRequest, publicRequest } from "../Axios/requestMethods";
import Box from '@mui/material/Box';
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
import {useSelector} from 'react-redux';


const ListingCreation =()=> {
    
    const [cloud,setCloud] = useState("");
    const [preset,setPreset] = useState("");
    const [rate,setRate] = useState("");
    const [time,setTime] = useState("");
    const [amount,setAmount] = useState("");
    const [address,setAddress] = useState("");
    const [pinCode,setPinCode] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [poster,setPoster] = useState("");
    const [posterName,setPosterName] = useState("");
    const [photos,setPhotos] = useState([]);
    const [retMessage,setRetMessage] = useState("");
    const [opn,setOpn] = useState(false);
    const [data, setData] = useState({lat: 28.304380682962783, lng: 77.08007812500001});
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

    useEffect(()=>{
      const f=async ()=>{
        if (pinCode.length===6) {
          const res = await userRequest.post("/listing/usePincode", {pinCode:pinCode});
          console.log(res.data);
          setState(res.data.State);
          setCity(res.data.City);
        }
      }
      f();
    }, [pinCode])

    
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
            pinCode: pinCode,
            city: city,
            state: state,
            title: title,
            description: description,
            poster: poster,
            posterName: posterName,
            titlePhoto: photos[0],
            photos: photos,
            latLon: data
        }

        const res = await userRequest.post("/listing/createListing", prod);
        if(res.status===200){
          await setRetMessage("The Listing is created Successfully. Thank You for Listing with Us.");
          await setOpn(true);
        }}

        const editPhotos=async (i)=>{
            let tempArray=photos;
            await tempArray.splice(i,1);
            setPhotos([...tempArray]);
        }

        const childToParent = (childdata) => {
          setData(childdata);
          console.log(data);
        }


  return (
      <>
      <Navbar />
    <Box position="static" sx={{ padding:'2% 7%', margin:'2% 0'}}>
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
                    {/* <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>.</p>
                    </Typography> */}
                    </Grid>
                    <Grid item xs={12} md={12}>
                          <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            Rate (₹/Month)
                            </Typography>
                        <TextField required className="inputRounded" id="outlined-basic" label="Rate" placeholder=" Charges in ₹ without any (,) or spaces" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setRate(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                          <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            Time In Month
                            </Typography>
                        <TextField required className="inputRounded" id="outlined-basic" label="Time in Months" placeholder="Time in Months" variant="outlined" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setTime(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            Type
                            </Typography>
                        <FormControl className="inputRounded" fullWidth>
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
                            <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            Area (in sq ft.)
                            </Typography>
                        <TextField required className="inputRounded" id="outlined-basic" label="Area" placeholder="Area of plot/house in sq ft. in number" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setAmount(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                            <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            Address
                            </Typography>
                            <TextareaAutosize
                                required
                              className="inputRounded"
                              aria-label="minimum height"
                              minRows={8}
                              placeholder="Enter the Address"
                              style={{ width: '100%', whiteSpace: "preWrap"}}
                              onChange={(e)=>setAddress(e.target.value)}
                          />
                    </Grid>
                    <Grid item xs={12} md={12}>
                            <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                            PinCode
                            </Typography>
                            <TextField required className="inputRounded" id="outlined-basic" label="Pin Code" placeholder="Pin Code" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setPinCode(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                            <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                             City
                            </Typography>
                        <TextField required id="outlined-basic" className="inputRounded" label="City" placeholder="Enter your City" fullWidth value={city} sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setCity(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                              <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                             Title
                            </Typography>
                        <TextField required className="inputRounded" id="outlined-basic" label="Title" placeholder="Enter the Title" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setTitle(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                          <Typography
                                    component="span"
                                    variant='body1'
                                    sx={{ mr: 2, display: { xs: 'block', md: 'block' }, color:'black', textAlign:'left' }}
                                >
                             Description
                          </Typography>
                    <TextareaAutosize
                        required
                        className="inputRounded"
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Description"
                        style={{ width: '100%', whiteSpace: "preWrap"}}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="secondary" type='submit' sx={{backgroundColor:"#ffc13b", width:'70%', height:'100%', borderRadius:5, textTransform: 'none' }} onClick={showWidget}>Upload Photos</Button>
                        
                    </Grid>
                    <Grid item xs={12} md={12}>
                    </Grid>
                    {photos.map( (e, index) =>
                        <div key={index} >
                            <img src={ e } width="100px" alt={'img' + {index}}/>
                            <Button variant="contained" sx={{backgroundColor:"black", width:'70%'}} onClick={ ()=>{editPhotos(index)}}>X</Button>
                        </div>
        )}
        
                    <p>{opn}</p>
                    
                    <MapRender childToParent={childToParent}/>
                    <Grid item xs={12} md={12}>
                        <Button variant="secondary" type='submit' sx={{backgroundColor:"#ffc13b", width:'70%', height:'100%', borderRadius:5, textTransform: 'none' }} onClick={handleClick} >Submit</Button>
                    </Grid>  
                </Grid>
            </form>
          </Toolbar>
          { opn ? <Overlay val={opn} ret={retMessage} />: null  }
      </Container>
    </Box>
    <BottomBar />
    </>
  );
}
export default ListingCreation;