import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userRequest } from "../../Axios/requestMethods";
import {useSelector} from 'react-redux';

function MediaCard(props) {
    const loggedUser=useSelector((state)=>state.user.currentUser);
    const [conversationName, setConversationName] = useState("");
  
    useEffect(()=>{
        const getConversationName = async ()=>{
          let k=""
        if(loggedUser._id===props.message.members[0]){
          console.log("0");
          k = await userRequest.get(`/conversations/find/${props.message.members[1]}`);
        }else{
          console.log('1');
          k = await userRequest.get(`/conversations/find/${props.message.members[0]}`);
        }
        setConversationName(k.data.username);
      }
      getConversationName()
    },[props]);
  
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