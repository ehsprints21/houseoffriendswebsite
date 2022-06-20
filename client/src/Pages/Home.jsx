import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import MailList from '../Components/MailList';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import CardClickable from '../Components/CardClickable';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Home = () =>{
    let navigate = useNavigate();
    return(
        <div>
            <Navbar />
                <video src="./assets/vidhome.mp4" autoPlay={true} muted style={{width: "100%"}} loop type="video/mp4" />
                <Box display={{md:'block', xs:'none'}} sx={{ flexGrow: 1, padding:'0 25%', position:'relative', bottom:'100px'}}>
                <Grid container spacing={0} sx={{ flexGrow: 1, display:'flex', backgroundColor:'#1b2f3f', borderRadius:10, opacity:'90%', padding:'3%'}} >
                    
                    <Grid item xs={12} md={12}>
                        <Box sx={{backgroundColor:'#1b2f3f', padding:'2%', borderRadius:20, opacity:'90%'}}>
                            <Typography
                                variant='h6'
                                component="span"
                                sx={{ display: { xs: 'block', md: 'block' }, color:'white', textAlign:'center', borderRadius:20 }}
                                >
                                    Rental Services
                            </Typography>
                            <Typography
                                variant='object2'
                                component="span"
                                sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'white', textAlign:'left', padding:'2% 10% 5% 10%'  }}
                            >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br/>

                                    
                            </Typography>
                            <Button variant="secondary" type='submit' onClick={() => {navigate("/aboutUs")}} sx={{backgroundColor:"#ffc13b", width:'25%', height:'100%' }}>See How It works</Button>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
                <Box display={{md:'none', xs:'block'}} sx={{ flexGrow: 1, padding:'0 2%', borderRadius:'20%', position:'relative', bottom:30}}>
                <Grid container spacing={0} sx={{ flexGrow: 1, display:'flex', borderRadius:'20%', opacity:'90%', padding:'3%'}} >
                    <Grid item xs={12} md={12}>
                        <Box sx={{backgroundColor:'#1b2f3f', borderRadius:5}}>
                        <Typography
                                variant='h6'
                                component="span"
                                sx={{ display: { xs: 'block', md: 'block' }, color:'white', textAlign:'center', borderRadius:'10%' }}
                                >
                                    Rental Services
                            </Typography>
                            <Typography
                                variant='object2'
                                component="span"
                                sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'white', textAlign:'left', padding:'2% 10% 5% 10%'  }}
                            >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br/>

                                    
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
    
            <Grid container spacing={2} sx={{padding: '0 10%'}}>
                <Grid item xs={12} md={6}>
                    <Container sx={{display:'block', alignContent:'center', padding:'0% 2%'}} >
                        <img src='acc' alt="Representation of product"/>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container sx={{display:'block', alignContent:'center', padding:'0% 2%'}} >
                        <Typography
                            variant='h4'
                            component="span"
                            sx={{ display: { xs: 'block', md: 'block' }, color:'black' }}
                            >
                                Product
                        </Typography>
                        <br />
                        <Typography
                            variant='object2'
                            component="span"
                            sx={{  display: { xs: 'none', md: 'block' }, fontSize:'17px', color:'text.secondary', textAlign:'left', padding:'0 15%' }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                <br />
                        </Typography>
                        <Typography
                            variant='object2'
                            component="span"
                            sx={{  display: { xs: 'block', md: 'none' }, fontSize:'17px', color:'text.secondary', textAlign:'left', padding:'0 5%' }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                <br />
                        </Typography>
                        <br />
                        <Button variant="secondary" onClick={() => {navigate("/contact")}} type='submit' sx={{backgroundColor:"#ffc13b", width:'50%', height:'100%' }}>Contact Us to Know More</Button>
                    </Container>
                </Grid>
                <Grid item xs={12} md={12}>
                    <><br/><br/><br/><br/></>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography
                        variant='h4'
                        component="span"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                        >
                            How It Works?
                    </Typography>
                </Grid>
                
                
                <Box sx={{position:'relative', padding:'5% 0 0 0', left:'20%', display: { xs: 'none', md: 'block' } }}>
                    <Grid container spacing={0} sx={{padding: '0'}}>
                        <Grid item xs={12} md={6} >
                                < CardClickable Photo="./assets/gotPlot.png"
                                            Link1="Check Listing"
                                            Link2="sessions"
                                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{position:'relative', left:'20%', display: { xs: 'none', md: 'block' } }}>
                                < CardClickable Photo="./assets/needHome.png"
                                            Link1="Check Options"
                                            Link2="sessions"
                                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ position:'relative', left:'12%', padding:'2%', display: { xs: 'block', md: 'none' }}}>
                    <Grid container spacing={0}>
                        <Grid item xs={10} md={6} sx={{padding:'2% 0'}} >
                                < CardClickable Photo="./assets/gotPlot.png"
                                            Link1="Check Listing"
                                            />
                        </Grid>
                        
                        <Grid item xs={10} md={6} sx={{padding:'2% 0'}}>
                                < CardClickable Photo="./assets/needHome.png"
                                            Link1="Check Options"
                                            />
                        </Grid>
                    </Grid>
                </Box>
                
                <Grid item xs={12} md={12} sx={{margin:'4% 0'}}>
                        <Typography
                            variant='h4'
                            component="span"
                            sx={{ display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                            >
                                Our Mission
                        </Typography>
                        <br /><br />
                        <Typography
                            variant='object2'
                            component="span"
                            sx={{  display: { xs: 'none', md: 'block' }, fontSize:'17px', color:'text.secondary', textAlign:'center', padding:'0 15%' }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                <br />
                        </Typography>
                        <Typography
                            variant='object2'
                            component="span"
                            sx={{  display: { xs: 'block', md: 'none' }, fontSize:'15px', color:'black', textAlign:'left', padding:'0 2%' }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                <br />
                        </Typography>
                        <br /><br />
                        <Button variant="secondary" type='submit' onClick={() => {navigate("/aboutUs")}} sx={{backgroundColor:"#ffc13b" }}>Know More</Button>
                        <br/><br/><br/>
                </Grid>
            </Grid>
            {/* <MailList /> */}
            <BottomBar />
        </div>  
    )
}
export default Home;