import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {useSelector} from 'react-redux';
import moment from 'moment'

function ChatCard(props) {
    const loggedUser=useSelector((state)=>state.user.currentUser);
    const [chatText, setChatText] = useState("");
    const [chatTime, setChatTime] = useState("");
    const [dirn, setDirn] = useState("");
  useEffect(()=>{
      setChatText(props.message.text);
      setChatTime(props.message.createdAt)
      if(loggedUser._id === props.message.sender){
        setDirn("right");
      }
  },[props, loggedUser._id ]);
    // console.log(props.message)
    return (
      <div>
        <Card variant='elevation' elevation={4} sx={{ width:"50%", margin:'2%', padding:'0', display:'block', borderRadius:5, float: dirn }}>
          <CardContent sx={{width:"100%", padding:'0 2.5%', backgroundColor:'white'}}>
            <Typography variant="object-2" component="div" sx={{color:'black', padding:'2% 2.5%', textAlign:'left'}} gutterBottom >
              {chatText}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div" sx={{ padding:'0 5%', textAlign:'right'}}>
              {moment(chatTime).fromNow()}
            </Typography>
          </CardContent>
       </Card>
      </div>
    );
  }

  export default ChatCard