import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <>
      <Card variant='elevation' elevation={4} sx={{ padding:'0', display: { xs: 'block', md: 'none' } }}>
      <CardMedia
        component="img"
        image={props.Photo}
        alt="new photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
            {props.Message}
        </Typography>
      </CardContent>
      <CardActions sx={{padding:'0 30%'}}>
        <Button variant="secondary" size="large" sx={{backgroundColor:'#ffc13b'}}>{props.Link1}</Button>
      </CardActions>
    </Card>

    <Card variant='elevation' elevation={4} sx={{ width:'100%', padding:'2%', display: { xs: 'none', md: 'block' } }}>
      <CardMedia
        component="img"
        image={props.Photo}
        alt="new photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
            {props.Message}
        </Typography>
      </CardContent>
      <CardActions sx={{padding:'0 30%'}}>
        <Button variant="secondary" size="large" sx={{backgroundColor:'#ffc13b'}}>{props.Link1}</Button>
      </CardActions>
    </Card>
    </>
    
    
  );
}