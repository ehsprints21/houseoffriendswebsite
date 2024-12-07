import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Card from '../Components/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () => {

    const fileList = [
        { name: 'Bigtyni_Pitch Deck.pdf', path: '/Bigtyni_Pitch Deck.pdf' },
        { name: 'Company_Deck_BIGTYNI.pdf', path: '/Company_Deck_BIGTYNI.pdf' },
    ];

    const downloadFile = (file) => {
        const anchor = document.createElement('a');
        anchor.href = file.path;
        anchor.download = file.name;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    const downloadAllFiles = () => {
        fileList.forEach(downloadFile);
    };

    return (
        <div>
            <Navbar />
            <Box sx={{ flexGrow: 1, margin: '0 15%' }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant="h5" component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding: '3% 5%', textAlign: 'center', color: '#FFB923' }}>
                                Vision Statement
                            </Typography>
                            <p></p>
                            <Typography variant="h4" component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding: '3% 5%', textAlign: 'left' }}>
                                Work with Individuals in mainstreaming land lending within the community.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant="h5" component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding: '3% 5%', textAlign: 'center', color: '#FFB923' }}>
                                About Us
                            </Typography>
                            <p></p>
                            <Typography variant="p" component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding: '3% 5%', textAlign: 'left', color: 'text.secondary' }}>
                                We are a team of architects and engineers witha passion for innovation and we are working a revolutionary idea of relocatable shelter.<br /><br />
                            </Typography>

                        </div>
                    </Grid>
                    <Typography variant="h5" component="div" sx={{ padding: '3% 5%', textAlign: 'center', color: '#FFB923' }}>
                        <p className='__para'>
                            Get Brochure
                            <button className='__button' title='Brochure' onClick={downloadAllFiles}>
                                <p className="btn2">
                                    <span className="spn2">Download</span>
                                </p>
                            </button>
                        </p>
                    </Typography>
                    <br /><br /><br />
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" component="div" sx={{ mr: 2, padding: '3% 5%', textAlign: 'center', color: '#FFB923' }}>
                            Our Key Virtues
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, margin: '5% 15%', alignItems: 'center' }}>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', alignSelf: 'center' }}>
                        <Card Photo='..\assets\about-page\career icon.svg' Title='Customer First' Message='Customer welfare and interest precedes everything else' />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex' }}>
                        <Card Photo='..\assets\about-page\Good humanicon.svg' Title='Collaboration' Message='Building partnerships and alliances is the fastest way to contribute and scale' />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex' }}>
                        <Card Photo='.\assets\about-page\Personal touch icon.svg' Title='Integrity' Message="It is about what's right over what’s convenient" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex' }}>
                        <Card Photo='.\assets\about-page\Experience icon.svg' Title='Transparency' Message='It is key to building trust.' />
                    </Grid>
                </Grid>
            </Box>
            <BottomBar />
        </div>
    )
}
export default About;