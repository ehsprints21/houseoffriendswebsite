import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userRequest } from "../../Axios/requestMethods";
import {useSelector} from 'react-redux';

function MediaCard(props) {
    const loggedUser=useSelector((state)=>state.user.currentUser);
    const [conversationName, setConversationName] = useState(null);
  
    useEffect(()=>{
        const getConversationName = async ()=>{
          let k=""
          let temp=await props?.message
        if(loggedUser._id === temp.members[1]){ 
          k = await userRequest.get(`/conversations/find/${props.message.members[0]}`);
        }else{
          k = await userRequest.get(`/conversations/find/${props.message.members[1]}`);
        }
        await setConversationName(k.data.username);
      }
      getConversationName()
    },[props, loggedUser._id]);
  
    const handleChatId=()=>{
      props.childToParent(props.message._id);
    }
  
      return (
              <Button fullWidth sx={{textAlign:'left', backgroundColor:'inherit'}} onClick={handleChatId} >
                    <Typography variant="object-2" color="text.secondary" sx={{textAlign:'left'}} >
                      { conversationName }
                    </Typography>
              </Button>
      );
    }
    export default MediaCard