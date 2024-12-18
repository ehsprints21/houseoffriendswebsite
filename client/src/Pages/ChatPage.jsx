import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Divider from '@mui/material/Divider';
import React, { useState, useEffect, useRef } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MediaCard, ActiveMediaCard }from '../Components/Chats/MediaCard';
import ChatCard from '../Components/Chats/ChatCard';
import { userRequest } from "../Axios/requestMethods";
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';

const Listing = () =>{
  const [conversations, setConversations] = useState([{}]);
  const [message, setMessage] = useState('');
  const [nos, setNos] = useState(0);
  const [sendAct, setSendAct] = useState(false);
  const [chat, setChat] = useState([{}]);
  const loggedUser=useSelector((state)=>state.user.currentUser);
  const [chatId, setChatId] = useState(null);
  const [chatProdName, setChatProdName] = useState('');
  const textInput = useRef(null);
  const messageEl = useRef(null);

  
  const childToParent = (childdata) => {
    //console.log(childdata)
    setChatId(childdata.convId);
    setChatProdName(childdata.prodName);
  }

  setInterval(()=>{setNos(Math.floor(Math.random() * 10))}, 10000);

  useEffect(()=>{
    const getConversations = async ()=>{
        const res = await userRequest.get(`/conversations/${loggedUser._id}`);
        setConversations(res.data);
    }
    getConversations()
  },[loggedUser._id]);

  useEffect(()=>{
    const getChats = async ()=>{
      if(chatId){
        const res = await userRequest.get(`/messages/${chatId}`);
        setChat(res.data);
      }
    }
    getChats()
  },[chatId, nos, sendAct]);

  // For AutoScroll Feature...

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const handleSend=async (e)=>{
    e.preventDefault();
    const t = await {conversationId:chatId, sender:loggedUser, text:message};
    const res = await userRequest.post(`/messages/`, t);
    textInput.current.value = "";
    setSendAct(true);
  }

    return(
          <>
            <Navbar />
              <Box sx={{width: '25%', height:'100vh', borderRightStyle:'ridge', overflowY:'scroll', float:'left' }}>
                <Typography
                              variant="h5"
                              component="div"
                              sx={{ mr: 2,  padding:'5% 5%', textAlign:'center', color:'#FFB923' }}
                              >
                                  People
                </Typography>

                      {conversations.map((item, index) =>(item._id!==chatId)?<>
                        <MediaCard message={item} key={index} childToParent={childToParent}/>
                      <Divider />
                      </>:<>
                        <ActiveMediaCard message={item} key={index} childToParent={childToParent}/>
                      <Divider />
                      </>
                       )}
              </Box>
              
{/* Conditionsl rendering here based on if there is some chat Id Set */}

               {(chatId) ? 
              <>
              <Box ref={messageEl} sx={{width: '74%', height:'78vh', borderRightStyle:'ridge', overflowY:'scroll', float:'right' }}>
                <Box sx={{ position: 'sticky', top: 5, backgroundColor:'#F5F5F5'}}>
                  <Typography
                              variant="h5"
                              component="div"
                              sx={{ mr: 2,  padding:'1% 5%', textAlign:'center', color:'text.secondary' }}
                              >
                                  {chatProdName}
                </Typography>
                </Box>
                <Typography
                              variant="h5"
                              component="div"
                              sx={{ mr: 2,  padding:'1% 5%', textAlign:'center', color:'#FFB923' }}
                              >
                                  Messages
                </Typography>

                {chat.map((item, index) =><ChatCard message={item} key={index} /> )}
                
              </Box>
              <Box sx={{width: '74%', borderRightStyle:'ridge', float:'right' }}>
                <Grid container spacing={0} sx={{backgroundColor:'white', borderTopStyle:'ridge', padding:'2%' }}>
                  <Grid item xs={9} md={9} >
                    <TextField
                          aria-label="minimum height"
                          inputRef={textInput}
                          multiline
                          rows={2}
                          placeholder="Type the Message"
                          style={{ width: '100%', whiteSpace: "preWrap"}}
                          onChange={(e)=>{setMessage(e.target.value); setSendAct(false)}}
                      />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Button sx={{textAlign:'center', backgroundColor:'inherit', float:'right', borderRadius:5, textTransform: 'none'}} onClick={handleSend}>
                      <SendIcon sx={{color:'black', position:'relative', top:20}}/>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              </> : <>
              <Box ref={messageEl} sx={{width: '67%', height:'78vh', borderRightStyle:'ridge', overflowY:'scroll', float:'right' }}>
                <Typography
                              variant="h3"
                              component="div"
                              sx={{ mr: 2,  padding:'1% 5%', textAlign:'center', color:'#FFB923' }}
                              >
                                  Messages
                </Typography>

                <ChatCard message={{text:"hello world more messages are coming select chats on left..."}} />
                
              </Box>
              </>}    
            <BottomBar />
          </>
    )
}

export default Listing;