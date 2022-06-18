import '../../App.css';
import * as React from 'react';
import Footer from './Footer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const BottomBar = () => {
  
  return (
    <>
    <AppBar position="static" sx={{ backgroundColor:'white', padding:'3% 7%'}}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{position:'relative' }}>
            <img src='../assets/hoffr.png' alt='titlePhoto'></img>
            <br />
            <FacebookIcon sx={{color:'black'}} /><TwitterIcon sx={{color:'black'}}/><InstagramIcon sx={{color:'black'}}/><YouTubeIcon sx={{color:'black'}}/>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Product
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >   
                <Link href="#" color="inherit" underline="none">Feature</Link><br/><br/>
                <Link href="/construction" color="inherit" underline="none">Pricing</Link><br/><br/>
                <Link href="/construction" color="inherit" underline="none">Reviews</Link><br/><br/>
                <Link href="/construction" color="inherit" underline="none">Updates</Link><br/><br/>
            </Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Company
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                <Link href="/aboutUs" color="inherit" underline="none">About Us</Link><br/><br/>
                <Link href="/contact" color="inherit" underline="none">Contact Us</Link><br/><br/>
            </Typography>

          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Support
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                <Link href="/construction" color="inherit" underline="none">Getting Started</Link><br/><br/>
                <Link href="/construction" color="inherit" underline="none">Help Center</Link><br/><br/>
            </Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Contact Us
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'block', md: 'block' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                <Link href="#" color="inherit" underline="none">contact@company.com</Link><br/><br/>
            </Typography>
          </Grid>
        </Grid>
        {/* <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Toolbar sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}>
            <Typography
                component="div"
                sx={{ mr: 2, height: '70px', display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%' }}
                >
                    <h1>Loner</h1>
            </Typography>
            <Typography
                 
                component="div"
                sx={{ mr: 2, height: '20px', display: { xs: 'block', md: 'flex' }, fontSize: '11px',position:'relative', right:'10%' }}
            >       
                    
                    <Typography
                         
                        component="div"
                        variant="h1"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'white'}}
                    >
                      
                    </Typography>
                    <a href="tel:+00000 11111" className='bottomLink'>+00000 11111 </a>
                    <a href="mailto:" className='bottomLink'> contact@company.com</a>
            </Typography>
          </Toolbar>



          <Toolbar sx={{ mr: 2, display: { xs: 'none', md: 'block' }, width:'45%', padding:'inherit 10px', margin:'inherit 10%'}}>
            <Typography
                variant="body2"
                component="div"
                paddingTop='5%'
                sx={{ mb: 1.5, mr: 2, height: '100%', display: { sm: 'none', md: 'block' }, fontSize: '13px',objectFit:'fill' }}
            >       
                    
                    <Container >At Loner, we are attempting to build comprehensive Loan
                    services for our clients and explore opportunities to make informed financial
                    decisions using resources available.</Container>

            </Typography>
          </Toolbar>



          <Typography
                
                component="div"
                sx={{height: '60px',width:'20%', display: { xs: 'block', md: 'block' }, fontSize: '13px', color:'white', textAlign:'left' }}
            >  
                    <li><a href="/" className='bottomLink'>About Us</a></li>
                    <li><a href="/" className='bottomLink'>Mission</a></li>
                    <li><a href="/" className='bottomLink'>Vision</a></li>
          </Typography>
          <Typography
                
                component="div"
                sx={{height: '60px', width:'20%', display: { xs: 'block', md: 'block' }, fontSize: '13px', color:'white', textAlign:'left' }}
            >  
                    <li><a href="/" className='bottomLink'>Master Class</a></li>
                    <li><a href="/" className='bottomLink'>Contact Us</a></li>
                    <li><a href="/" className='bottomLink'>Recordings</a></li>
          </Typography>

        </Toolbar> */}
        





        {/* <Toolbar sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}>
          <Typography
                 
                component="div"
                sx={{ mr: 2, height: '70px', display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%' }}
                >
                    <h1>Loner</h1>
            </Typography>
            <Typography
                 
                component="div"
                sx={{ mr: 2, height: '20px', display: { xs: 'block', md: 'flex' }, fontSize: '11px',position:'relative', right:'10%' }}
            >       
                    
                    <Typography
                         
                        component="div"
                        variant="h1"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'white'}}
                    >
                      
                    </Typography>
                    <a href="tel:+00000 11111" className='bottomLink'>+00000 11111 </a>
                    <a href="mailto:" className='bottomLink'> contact@company.com</a>
            </Typography>
          <Typography
                 
                component="div"
                sx={{height: '60px', display: { xs: 'inline-block', md: 'block' }, fontSize: '13px', color:'white', textAlign:'left', position: 'relative', right:'20%' }}
            >  
                    <li><a href="/" className='bottomLink'>About Us</a></li>
                    <li><a href="/" className='bottomLink'>Mission</a></li>
                    <li><a href="/" className='bottomLink'>Vision</a></li>
          </Typography>
          <Typography
                 
                component="div"
                sx={{height: '60px', display: { xs: 'inline-block', md: 'block' }, fontSize: '13px', color:'white', paddingLeft:'10px',  textAlign:'left' }}
            >  
                    <li><a href="/" className='bottomLink'>Master Class</a></li>
                    <li><a href="/" className='bottomLink'>Contact Us</a></li>
                    <li><a href="/" className='bottomLink'>Recordings</a></li>
          </Typography>
        </Toolbar> */}
        
      </Container>
      
    </AppBar>
    <Footer />
    </>
  );
};
export default BottomBar;