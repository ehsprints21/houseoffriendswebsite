import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';
import Card from '../Components/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () =>{
    return(
        <div>
            <Navbar />
            <Box sx={{ flexGrow: 1, margin:'0 15%' }}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                <div>
                    <Typography
                        variant="b"
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                        >
                            Vision Statement
                    </Typography>
                    <p></p>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'left' }}
                        >
                            Work with Individuals in mainstreaming land lending within the community.
                    </Typography>
                
                </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            variant="b"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                About Us
                        </Typography>
                        <p></p>
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'left' }}
                            >
                                uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.<br /><br />
                                
                        </Typography>
                    
                    </div>
                </Grid>
                    <br /><br /><br />
                <Grid item xs={12} md={12}>
 
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Our Key Virtues
                        </Typography>
                </Grid>
            </Grid>
                
            </Box>
            <Box sx={{ flexGrow: 1, margin:'5% 15%',alignItems:'center'}}>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex', alignSelf:'center'}}>
                        <Card Photo='..\assets\about-page\career icon.svg' Title='Customer First' Message='Customer welfare and interest precedes everything else'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='..\assets\about-page\Good humanicon.svg' Title='Collaboration' Message='Building partnerships and alliances is the fastest way to contribute and scale'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='.\assets\about-page\Personal touch icon.svg' Title='Integrity' Message="It is about what's right over what’s convenient"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='.\assets\about-page\Experience icon.svg' Title='Transparency' Message='It is key to building trust.'/>
                    </Grid>
                </Grid>
            </Box>
            <BottomBar />
        </div>  
    )
}
export default About;