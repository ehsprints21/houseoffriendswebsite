import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userRequest, publicRequest } from "../../Axios/requestMethods";
import {useSelector} from 'react-redux';

function MediaCard(props) {
    const loggedUser=useSelector((state)=>state.user.currentUser);
    const [conversationName, setConversationName] = useState(null);
    const [productName, setProductName] = useState('');

    useEffect(()=>{
        const getConversationName = async ()=>{
          let k=""
          let temp=await props?.message
        if(loggedUser._id === await temp.members[1]){ 
          k = await userRequest.get(`/conversations/find/${props.message.members[0]}`);
        }else{
          k = await userRequest.get(`/conversations/find/${props.message.members[1]}`);
        }
        await setConversationName(k.data.username);
        const productId=await temp.product;
        const resp=await publicRequest.get(`/listing/showListing/${productId}`);
        setProductName(resp.data.title);
      }
      getConversationName()
    },[props, loggedUser._id]);
  
    const handleChatId=()=>{
      //console.log(props);
      props.childToParent({convId:props.message._id, prodName: productName});
    }
  
      return (
              <Button fullWidth sx={{ backgroundColor:'inherit', display:'block', padding:0}} onClick={handleChatId}  >
                    <Typography variant="object-2" color="text.secondary" sx={{textAlign:'left'}} >
                     { conversationName }
                    </Typography>
                    <br/>
                    <Typography variant="object-2" noWrap color="text.secondary" sx={{textAlign:'right'}} >
                      { productName }
                    </Typography>
              </Button>
      );
    }

    function ActiveMediaCard(props) {
      const loggedUser=useSelector((state)=>state.user.currentUser);
      const [conversationName, setConversationName] = useState(null);
      const [productName, setProductName] = useState('');
  
      useEffect(()=>{
          const getConversationName = async ()=>{
            let k=""
            let temp=await props?.message
          if(loggedUser._id === await temp.members[1]){ 
            k = await userRequest.get(`/conversations/find/${props.message.members[0]}`);
          }else{
            k = await userRequest.get(`/conversations/find/${props.message.members[1]}`);
          }
          await setConversationName(k.data.username);
          const productId=await temp.product;
          const resp=await publicRequest.get(`/listing/showListing/${productId}`);
          setProductName(resp.data.title);
        }
        getConversationName()
      },[props, loggedUser._id]);
    
      const handleChatId=()=>{
        //console.log(props);
        props.childToParent({convId:props.message._id, prodName: productName});
      }
    
        return (
                <Button fullWidth sx={{ backgroundColor:'#FFB923', display:'block', padding:'9px 0'}} onClick={handleChatId}  >
                      <Typography variant="object-2" color="text.secondary" sx={{textAlign:'left'}} >
                       { conversationName }
                      </Typography>
                      <br/>
                      <Typography variant="object-2" noWrap color="text.secondary" sx={{textAlign:'right'}} >
                        { productName }
                      </Typography>
                </Button>
        );
      }

export { MediaCard, ActiveMediaCard}