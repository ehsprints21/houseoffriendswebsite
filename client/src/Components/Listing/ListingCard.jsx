import "../../App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import classes from "../../Modules/Mediacard.module.css";
import moment from "moment";

function MediaCard(props) {
  return (
    // <Card variant='elevation' elevation={4} sx={{ minWidth:300, maxWidth:300, margin:'2%', padding:'1% 2.5%', backgroundColor:'#F5F5F5' }}>
    //     <CardMedia
    //       component="img"
    //       height='175'
    //       width='100%'
    //       image={(props.photo)?props.photo : 'https://res.cloudinary.com/dhhx4amh9/image/upload/v1654141765/vkdo18urwpimv6ibetv2.png'}
    //       alt="Product Photo"
    // />
    //     <CardContent sx={{minWidth:300, minHeight:50, maxHeight:100, padding:'0 2.5%'}}>
    //       <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%', textAlign:'left'}}>
    //         <b>{props.rate}</b>
    //       </Typography>
    //     </CardContent>
    //     <CardContent sx={{minWidth:300, padding:'1% 5%'}}>
    //       <Typography variant="body-1" noWrap component="div" sx={{color:'text.secondary', textAlign:'left'}}>
    //         <em>{props.title}</em>
    //       </Typography>
    //     </CardContent>
    //   <CardContent sx={{maxWidth:300, height:25, maxHeight:25, padding:'1%'}}>
    //     <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'left'}}>
    //       <em>
    //         {props.city}
    //       </em>
    //     </Typography>
    //   </CardContent>
    //   <CardContent sx={{maxWidth:300, height:25, maxHeight:25, padding:'1%'}}>
    //     <Typography variant="caption" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'right'}}>
    //         {moment(props.time).fromNow()}
    //     </Typography>
    //   </CardContent>
    // </Card>
    <div className={classes.mediacard}>
      <img
        src={
          props.photo
            ? props.photo
            : "https://res.cloudinary.com/dhhx4amh9/image/upload/v1654141765/vkdo18urwpimv6ibetv2.png"
        }
      />
      <div className={classes.mediacardcontent}>
        <p className={classes.head}>
          {props.title === "" ? props.title.slice(0, 33) : ""}
        </p>
        <p className={classes.place}>
          {props.city},{props.state}
        </p>
        <p className={classes.rate}>Rs.{props.rate}</p>
      </div>
    </div>
  );
}
export default MediaCard;
