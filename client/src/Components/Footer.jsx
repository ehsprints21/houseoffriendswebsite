import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Disclaimer','Privacy','Terms & Conditions'];

const Footer = () => {
  
  return (
    <AppBar position="static" sx={{backgroundColor: '#394044', paddingLeft:'8%', paddingRight:'8%' }}>
      <Container maxWidth="xl" sx={{ paddingTop:'0', paddingBottom: '0', margin:'0'}}>
        <Toolbar sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <Typography
            component="span"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize:'13px' }}
          >
            Copyright 2022. Dichroic Labs LLP All Rights Reserved. 
          </Typography>
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse' ,display: { xs: 'none', md: 'flex' } }}>
            {pages.slice(0).reverse().map((page, index) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', margin:'0', fontSize:'13px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, fontSize:'13px', textAlign:'center' }}>
            Copyright 2022. Dichroic Labs LLP All Rights Reserved. 
        </Box>
        
        
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                
                {pages.map((page, index) => (
                <Button
                    sx={{color: 'white', display: 'flex', textDecoration:'underline', fontSize:'11px'}}
                    key={index}
                >
                    {page}
                </Button>
                ))}
            </Box>
      </Container>
    </AppBar>
  );
};
export default Footer;