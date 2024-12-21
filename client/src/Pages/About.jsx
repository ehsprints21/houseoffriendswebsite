import '../App.css';
import Navbar from '../Components/CommonComponents/Navbar';
import BottomBar from '../Components/CommonComponents/BottomBar';
import Card from '../Components/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import team from './team.png';

const About = () => {

    const fileList = [
        { name: 'Company Deck_BIGTYNI.pdf', path: '/Company Deck_BIGTYNI.pdf' },
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
            <section>
                <div className="__imgCover">
                    <h1 className='__sectionAbout'>About Us</h1>
                </div>
                <p>We are a dedicated team of architects and engineers driven by a shared passion for innovation and sustainable design. Our mission is to redefine the possibilities of adaptable living and working spaces with our revolutionary concept of relocatable shelters. </p>
            </section>

            <section>
                <h1>Our Vision</h1>
                <p>Partnering with individuals to integrate land lending seamlessly into the community.</p>
            </section>

            <Box sx={{ flexGrow: 1, margin: '2% 15%', alignItems: 'center' }}>
                <section>
                    <h1>Our Key Virtues</h1>
                </section>
                <div className="__assets">
                    <div className="asset" />
                    <div className="asset" />
                    <div className="asset" />
                    <div className="asset" />
                </div>
                <div className="__gridCont">
                    <Card className='__cards' Photo='..\assets\about-page\career icon.svg' Title='Customer First' Message='Customer welfare and interest precedes everything else' />
                    <Card className='__cards' Photo='..\assets\about-page\Good humanicon.svg' Title='Collaboration' Message='Building partnerships and alliances is the fastest way to contribute and scale' />
                    <Card className='__cards' Photo='.\assets\about-page\Personal touch icon.svg' Title='Integrity' Message="It is about what's right over what’s convenient" />
                    <Card className='__cards' Photo='.\assets\about-page\Experience icon.svg' Title='Transparency' Message='It is key to building trust.' />
                </div>
            </Box>

            <button className='__button' title='Brochure' onClick={downloadAllFiles}>
                Get the Brochure
            </button>

            <section>
                <h1>About Our Team</h1>
            </section>
            <div className="__assets Styles">
                    <div className="asset" />
                    <h3>Members</h3>
                    <div className="asset" />
                </div>
            <div className='__teamInfo'>
                <img className='__teamImg' src={team} alt="" />
                <div className="__teams">
                    <div className="__members">
                        <p className='__teamMember'>Sharad Sinha <br />
                            <span style={{ fontSize: "2vw" }}>CEO</span>
                        </p>
                        <div className="polygon">
                            25+ years <br />
                            Marketing Sales,<br />
                            BD, Design <br />(Architecture)
                        </div>
                    </div>
                    <div className="__members">
                        <p className='__teamMember'>Arti Singh <br />
                            <span style={{ fontSize: "2vw" }}>HR and Admin</span>
                        </p>
                        <div className="polygon">
                            25+ years <br />
                            Education<br />
                            Entrepreneur
                        </div>
                    </div>
                    <div className="__members">
                        <p className='__teamMember'>Sharad Sinha <br />
                            <span style={{ fontSize: "2vw" }}>CEO</span>
                        </p>
                        <div className="polygon">
                            23+ years <br />
                            Design (Architecture)<br />
                            Entrepreneur
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    )
}
export default About;