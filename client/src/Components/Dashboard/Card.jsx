import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
  return (
    <Card variant='elevation' elevation={4} sx={{ width:150, padding:'1%', display:'flex' }}>
      <CardContent>
        <Typography variant="p" component="div" sx={{ padding:'5%'}}>
          <img src={props.Photo} height={50} alt='photoForCard'/>
        </Typography>
        <Typography variant="h6" component="div" sx={{textTransform: 'none'}}>
          {props.Title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.Message}
        </Typography>
      </CardContent>
    </Card>
  );
}
