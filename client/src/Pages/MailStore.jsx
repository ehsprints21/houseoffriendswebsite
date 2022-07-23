import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Footer from '../Components/CommonComponents/Footer';

import React, { useState,useEffect } from "react";
import { userRequest } from "../Axios/requestMethods";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


function MediaCard(props) {

    return (
      <Card variant='elevation' elevation={2} sx={{ minWidth:"80%", padding:'0' }}>
          <CardContent sx={{minWidth:"80%", padding:'1% 0'}}>
            <Grid container spacing={1}>
                <Grid item xs={4} md={4}>
                    <Typography variant="span" component="span" sx={{ padding:'0 5%'}}>
                        <span>{props.title}</span>
                    </Typography>      
                </Grid>
            
            
                <Grid item xs={4} md={4}>
                    <Typography variant="span" component="span" sx={{ padding:'0 5%'}}>
                        <span>{props.name}</span>
                    </Typography> 
                </Grid>
            
            
                <Grid item xs={4} md={4}>
                    <Typography variant="span" component="span" sx={{ padding:'0 5%'}}>
                        <span>{props.type}</span>
                    </Typography>    
                </Grid>
            </Grid>
          </CardContent>
      </Card>
    );
  }

const Session = () =>{

  const [mails,setMails] = useState([{}]);

  useEffect(()=>{
    const getSessions = async ()=>{
      const res = await userRequest.get(`/email/showEmails`);
      setMails(res.data);
    }
    getSessions()
  },[]);

    return(
            <div >
            <Navbar />
            <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Emails
                        </Typography>
            </Grid>
            </Grid>

            <Box width={'80%'}  sx={{padding:'5% 5% 10% 5%'}}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={12}  >
                    <MediaCard title={'Email Id'} name={"Name"} type={"User Type"} />
                </Grid>
                
                    {mails.map((item) =><Grid item xs={12} md={12} lg={12}  >
                    <MediaCard title={item.emailId} key={item} name={item.name} type={item.userType} />
                                                </Grid>
                                                )}
                
              </Grid>
            </Box>
                <BottomBar />
              <Footer />
            </div>
    )
}
export default Session;