import '../../App.css';
import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import moment from 'moment'

function MediaCard(props) {

    return (
      <Card variant='elevation' elevation={4} sx={{ minWidth:300, maxWidth:300, margin:'2%', padding:'1% 2.5%', backgroundColor:'#F5F5F5' }}>
          <CardMedia
            component="img"
            height='175'
            width='100%'
            image={props.photo}
            alt="Product Photo"
      />
          <CardContent sx={{minWidth:300, minHeight:50, maxHeight:100, padding:'0 2.5%'}}>
            <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%', textAlign:'left'}}>
              <b>{props.rate}</b>
            </Typography>
          </CardContent>
          <CardContent sx={{minWidth:300, padding:'1% 5%'}}>
            <Typography variant="body-1" noWrap component="div" sx={{color:'text.secondary', textAlign:'left'}}>
              <em>{props.title}</em>
            </Typography>
          </CardContent>
        <CardContent sx={{maxWidth:300, height:25, maxHeight:25, padding:'1%'}}>
          <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'left'}}>
            <em>
              {props.city}
            </em>
          </Typography>
        </CardContent>
        <CardContent sx={{maxWidth:300, height:25, maxHeight:25, padding:'1%'}}>
          <Typography variant="caption" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'right'}}>
              {moment(props.time).fromNow()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  export default MediaCard;