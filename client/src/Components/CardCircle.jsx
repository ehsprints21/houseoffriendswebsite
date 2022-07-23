import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const card1 = (
  <React.Fragment>
    <CardContent sx={{backgroundColor:'#BEBDB8', paddingTop:'35%', paddingBottom:'40%'}}>
        <img src='..\assets\Asset 12NPOCA Website.png' height='50' width='50' alt='cardCircle'/>
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent sx={{backgroundColor:'#BEBDB8', paddingTop:'35%', paddingBottom:'40%'}}>
        <img src='..\assets\Asset 13NPOCA Website.png' height='50' width='50' alt='cardCircle'/>
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent sx={{backgroundColor:'#BEBDB8', paddingTop:'35%', paddingBottom:'40%'}}>
        <img src='..\assets\Asset 14NPOCA Website.png' height='50' width='50' alt='cardCircle'/>
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Grid container spacing={1} sx={{padding:'2% 10%'}}>
      <Grid item xs={12} md={3} >
        <Box sx={{borderStyle:'solid', borderColor:'#BEBDB8', borderRadius:'100%',padding:'5px', display:'inline-block', '&:hover': {boxShadow:'0 0 0 2px #ffc13b', borderColor:'#ffc13b'} }}>
          <Card variant="outlined" sx={{width:145, height:145, borderRadius:'100%' }}>{card1}</Card>
          
        </Box>
        <p>Become a member <br/> of the initiative</p>
      </Grid>
      <Grid item xs={12} md={1} >
        <ArrowRightAltIcon sx={{position:'relative', top:'25%', display: { xs: 'none', md: 'block' }}}/>
        <ArrowDownwardIcon sx={{position:'relative', top:'25%',left:'47%', display: { xs: 'block', md: 'none' }}}/>
      </Grid>
      <Grid item xs={12} md={3} >
        <Box sx={{borderStyle:'solid', borderColor:'#BEBDB8', borderRadius:'100%',padding:'5px', display:'inline-block', '&:hover': {boxShadow:'0 0 0 2px #ffc13b', borderColor:'#ffc13b'} }}>
          <Card variant="outlined" sx={{width:145, height:145, borderRadius:'100%' }}>{card2}</Card>
        </Box>
        <p>Inform People about <br/> our initiative</p>
      </Grid>
      <Grid item xs={12} md={1} >
        <ArrowRightAltIcon sx={{position:'relative', top:'25%', display: { xs: 'none', md: 'block' }}}/>
        <ArrowDownwardIcon sx={{position:'relative', top:'25%', left:'47%', display: { xs: 'block', md: 'none' }}}/>
      </Grid>
      <Grid item xs={12} md={3} >
        <Box sx={{borderStyle:'solid', borderColor:'#BEBDB8', borderRadius:'100%',padding:'5px', display:'inline-block', '&:hover': {boxShadow:'0 0 0 2px #ffc13b', borderColor:'#ffc13b'} }}>
          <Card variant="outlined" sx={{width:145, height:145, borderRadius:'100%' }}>{card3}</Card>
        </Box>
        <p>Join our media list to <br/> get more benefits</p>
      </Grid>
    </Grid>

  );
}
