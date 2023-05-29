import "../App.css";
import Navbar from "../Components/CommonComponents/Navbar";
import BottomBar from "../Components/CommonComponents/BottomBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mr: 2,
              padding: "2% 5%",
              textAlign: "center",
              color: "#Black",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mr: 2,
              padding: "1% 30%",
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            If you have a question or a request, we will be happy to help. Feel
            free to contact us by email, WhatsApp, or telephone and we will get
            back to you at the earliest.
          </Typography>
        </Grid>

        <Grid
          container
          spacing={0}
          sx={{
            margin: "5% 20%",
            alignItems: "center",
            position: "relative",
            left: "5%",
          }}
        >
          <Grid item xs={12} md={4} sx={{ marginBottom: 5 }}>
            <Card
              variant="elevation"
              elevation={4}
              sx={{
                width: 200,
                height: 250,
                padding: "2%",
                alignSelf: "center",
              }}
            >
              <CardMedia
                width="50"
                component="img"
                height="140"
                image="..\assets\contact-page\Building icon.svg"
                alt="green iguana"
                sx={{ objectFit: "scale-down" }}
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  <PinDropIcon sx={{ position: "relative", top: "5px" }} />{" "}
                  India
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 14 }}
                >
                  <CallIcon sx={{ position: "relative", top: "5px" }} /> +91 626
                  524 6491{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ marginBottom: 5 }}>
            <Card
              variant="elevation"
              elevation={4}
              sx={{
                width: 200,
                height: 250,
                padding: "2%",
                alignSelf: "center",
              }}
            >
              <CardMedia
                width="50"
                component="img"
                height="140"
                image="..\assets\contact-page\Mail icon.svg"
                alt="green iguana"
                sx={{ objectFit: "scale-down" }}
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  <PersonIcon sx={{ position: "relative", top: "5px" }} />
                  <a className="navMenurev" href="mailto:">
                    hello@bigtyni.com
                  </a>
                  <br />
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 14 }}
                >
                  <MailOutlineIcon sx={{ position: "relative", top: "5px" }} />{" "}
                  <a className="navMenurev" href="mailto:">
                    hello@bigtyni.com
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ marginBottom: 5 }}>
            <Card
              variant="elevation"
              elevation={4}
              sx={{
                width: 200,
                height: 250,
                padding: "2%",
                alignSelf: "center",
              }}
            >
              <CardMedia
                width="50"
                component="img"
                height="140"
                image="..\assets\contact-page\group chat.svg"
                alt="green iguana"
                sx={{ objectFit: "scale-down" }}
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  Join our WhatsApp group
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 14 }}
                >
                  <a href="" className="navMenu">
                    <Button sx={{ backgroundColor: "#FFB923", color: "black" }}>
                      <WhatsAppIcon />
                      Join Now{" "}
                    </Button>
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Grid>

      <BottomBar />
    </div>
  );
};
export default Contact;
