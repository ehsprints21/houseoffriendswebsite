import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import {useSelector} from 'react-redux';


function ChatCard(props) {
    const loggedUser=useSelector((state)=>state.user.currentUser);
    const [chatText, setChatText] = useState("");
    const [dirn, setDirn] = useState("");
  useEffect(()=>{
      setChatText(props.message.text);
      if(loggedUser._id === props.message.sender){
        setDirn("right");
      }
  },[props]);
    // console.log(props.message)
    return (
      <div>
        <Card variant='elevation' elevation={4} sx={{ minWidth:"50%", maxWidth:325, margin:'2%', padding:'0', display:'block', float: dirn }}>
          <CardContent sx={{minWidth:"50%", minHeight:10, maxHeight:100, padding:'0 2.5%', backgroundColor:'white'}}>
            <Typography variant="object-2" component="div" sx={{color:'black', padding:'2% 5%', textAlign:'left'}}>
              {chatText}
            </Typography>
          </CardContent>
       </Card>
      </div>
    );
  }

  export default ChatCard