import '../App.css';
import * as React from 'react';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Construction = () => {
  return (
        <div>
            <Navbar />
            <Box sx={{padding:'15%'}}>
                <Typography
                        component="h1"
                        sx={{color:'black', textAlign:'center', fontSize:50 }}
                    >
                        PAGE UNDER C<span style={{color: "#FFC13B"}} >O</span>NSTRUCTI<span style={{color: "#FFC13B"}}>O</span>N
                </Typography>
            </Box>
            <BottomBar />
            <Footer />
        </div>
  );
};
export default Construction;