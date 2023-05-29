import "../../App.css";
import * as React from "react";
import Footer from "./Footer";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const BottomBar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "3% 7%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{ position: "relative" }}>
              <img
                src="../assets/bigTinyLogo.jpg"
                alt="titlePhoto"
                height="40px"
                width="250px"
                className="img"
              />
              <br />
              <FacebookIcon sx={{ color: "black" }} />
              <TwitterIcon sx={{ color: "black" }} />
              <InstagramIcon sx={{ color: "black" }} />
              <YouTubeIcon sx={{ color: "black" }} />
              {/* <img src="./assets/behance-fill.svg" alt="behance link" /> */}
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                Product
              </Typography>
              <Typography
                component="div"
                variant="object-2"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                <Link href="#" color="text.secondary" underline="none">
                  Feature
                </Link>
                <br />
                <br />
                <Link
                  href="/construction"
                  color="text.secondary"
                  underline="none"
                >
                  Pricing
                </Link>
                <br />
                <br />
                <Link
                  href="/construction"
                  color="text.secondary"
                  underline="none"
                >
                  Reviews
                </Link>
                <br />
                <br />
                <Link
                  href="/construction"
                  color="text.secondary"
                  underline="none"
                >
                  Updates
                </Link>
                <br />
                <br />
              </Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                Company
              </Typography>
              <Typography
                component="div"
                variant="object-2"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                <Link href="/aboutUs" color="text.secondary" underline="none">
                  About Us
                </Link>
                <br />
                <br />
                <Link href="/contact" color="text.secondary" underline="none">
                  Contact Us
                </Link>
                <br />
                <br />
              </Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                Support
              </Typography>
              <Typography
                component="div"
                variant="object-2"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                <Link
                  href="/construction"
                  color="text.secondary"
                  underline="none"
                >
                  Getting Started
                </Link>
                <br />
                <br />
                <Link
                  href="/construction"
                  color="text.secondary"
                  underline="none"
                >
                  Help Center
                </Link>
                <br />
                <br />
              </Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                component="div"
                variant="object-2"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "block" },
                  paddingBottom: "2%",
                  paddingTop: "3%",
                  color: "black",
                }}
              >
                <Link href="#" color="text.secondary" underline="none">
                  contact@company.com
                </Link>
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Footer />
    </>
  );
};
export default BottomBar;
