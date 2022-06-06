import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const BottomBar = () => {
  
  return (
    <AppBar position="static" sx={{ backgroundColor:'white', paddingLeft:'7%', paddingRight:'7%', paddingBottom:'2%', borderBottomStyle:'solid', borderBottomColor:'grey'}}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{position:'relative', top:10 }}>
            <img src='./assets/hoffr.png' alt='titlePhoto'></img>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Product
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                Feature<br/><br/>
                Pricing<br/><br/>
                Reviews<br/><br/>
                Updates<br/><br/>
            </Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Company
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                About<br/><br/>
                Contact Us<br/><br/>
            </Typography>

          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Support
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                Getting Started<br/><br/>
                Help Center<br/><br/>
            </Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography
              component="div"
              variant="h5"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
              Contact Us
            </Typography>
            <Typography
              component="div"
              variant="object-2"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, paddingBottom:'2%', paddingTop:'3%', color:'black' }}
            >
                contact@company.com<br/><br/>
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
  );
};
export default BottomBar;