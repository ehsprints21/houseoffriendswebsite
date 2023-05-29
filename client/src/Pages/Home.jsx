import "../App.css";
import "./common.css";
import Navbar from "../Components/CommonComponents/Navbar";
import MailList from "../Components/MailList";
import BottomBar from "../Components/CommonComponents/BottomBar";
import Footer from "../Components/CommonComponents/Footer";
import CardClickable from "../Components/CardClickable";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Faq from "../Components/Faq";
import Sturdy from "../Components/CommonComponents/Sturdy";
import classes from "../Modules/Home.module.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const intresetedhandler = () => {
    window.scrollTo(0, 0);
    navigate("/sessionCreation");
  };
  const buyinghandler = () => {
    window.scrollTo(0, 0);
    navigate("/Form");
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className=" main__container">
        <div className="second__container">
          <div className=" text__container">
            <h1>Imagine a shelter you can take ... anywhere</h1>
            <h2>A Bilding system that is relocatable. 100% salvageable</h2>
          </div>
          <div className="input__container">
            <input
              type="email"
              name="email"
              className="email__input"
              placeholder="Email"
            />
            <input
              type="number"
              name="phone"
              className="phone__input"
              placeholder=" Phone Number"
            />
            <input type="submit" value="STAY UPDATED" className="submit__btn" />
          </div>
        </div>
        <div className={classes.mainvideo}>
          <video
            src="./assets/Compressed Big Tiny (1).mp4"
            autoPlay={true}
            muted
            loop
            type="video/mp4"
          />
        </div>
      </div>
      <div className=" survey__container__main">
        <div className=" survey__container">
          <p>Tell us how and where you intend to use the modular shelter</p>
          <Link to="/" className="survey__link">
            Take a survey
          </Link>
        </div>
      </div>
      {/* <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          flexGrow: 1,
          padding: "0 25%",
          position: "relative",
          bottom: "100px",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            flexGrow: 1,
            display: "flex",
            backgroundColor: "#1b2f3f",
            borderRadius: 10,
            opacity: "90%",
            padding: "3%",
          }}
        >
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                backgroundColor: "#1b2f3f",
                padding: "2%",
                borderRadius: 20,
                opacity: "90%",
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  display: { xs: "block", md: "block" },
                  color: "white",
                  textAlign: "center",
                  borderRadius: 20,
                }}
              >
                Rental Services
              </Typography>
              <Typography
                variant="object2"
                component="span"
                sx={{
                  display: { xs: "block", md: "block" },
                  fontSize: "15px",
                  color: "white",
                  textAlign: "left",
                  padding: "2% 10% 5% 10%",
                }}
              >
                Providing modular solutions for all people seeking short term
                <br />
                housing Earning revenue for people with free laying plots
              </Typography>
              <Button
                variant="secondary"
                type="submit"
                onClick={() => {
                  navigate("/aboutUs");
                }}
                sx={{
                  backgroundColor: "#ffc13b",
                  width: "25%",
                  height: "100%",
                }}
              >
                See How It works
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
      <Box
        display={{ md: "none", xs: "block" }}
        sx={{
          flexGrow: 1,
          padding: "0 2%",
          borderRadius: "20%",
          position: "relative",
          bottom: 30,
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            flexGrow: 1,
            display: "flex",
            borderRadius: "20%",
            opacity: "90%",
            padding: "3%",
          }}
        >
          <Grid item xs={12} md={12}>
            <Box sx={{ backgroundColor: "#1b2f3f", borderRadius: 5 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  display: { xs: "block", md: "block" },
                  color: "white",
                  textAlign: "center",
                  borderRadius: "10%",
                }}
              >
                Rental Services
              </Typography>
              <Typography
                variant="object2"
                component="span"
                sx={{
                  display: { xs: "block", md: "block" },
                  fontSize: "15px",
                  color: "white",
                  textAlign: "left",
                  padding: "2% 10% 5% 10%",
                }}
              >
                Providing modular solutions for all people seeking short term
                <br />
                housing Earning revenue for people with free laying plots
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <div className={classes.mainproduct}>
        <Grid item xs={12} md={6}>
          <Container
            sx={{ display: "block", alignContent: "center", padding: "0% 2%" }}
          >
            <img
              src="/assets/image 6.png"
              alt="Representation of product"
              className={classes.image}
            />
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container
            sx={{ display: "block", alignContent: "center", padding: "0% 2%" }}
          >
            <Typography
              variant="h4"
              component="span"
              sx={{
                display: { xs: "block", md: "block" },
                color: "black",
                fontSize: "42px",
              }}
            >
              Product
            </Typography>
            <br />
            <Typography
              variant="object2"
              component="span"
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: "24px",
                color: "text.secondary",
                textAlign: "left",
                padding: "0 15%",
              }}
            >
              Our prefabricated, ready-to-use ‘movable habitable space’ is a
              portable shelter that can be assembled at any firm land with ease
              and time efficiency. A collapsible upper structure built on a
              self-adjusting platform provides quick and cozy solutions to any
              one looking for a short term but comfortable stay.
              <br />
            </Typography>
            <Typography
              variant="object2"
              component="span"
              sx={{
                display: { xs: "block", md: "none" },
                fontSize: "17px",
                color: "text.secondary",
                textAlign: "left",
                padding: "0 5%",
              }}
            >
              {" "}
              Our prefabricated, ready-to-use ‘movable habitable space’ is a
              portable shelter that can be assembled at any firm land with ease
              and time efficiency. A collapsible upper structure built on a
              self-adjusting platform provides quick and cozy solutions to any
              one looking for a short term but comfortable stay.
              <br />
            </Typography>
            <br />
            {/* <Button
              variant="secondary"
              onClick={() => {
                navigate("/contact");
              }}
              type="submit"
              sx={{ backgroundColor: "#ffc13b", width: "50%", height: "100%" }}
            >
              Contact Us to Know More
            </Button> */}
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="product__button"
            >
              {/* <div>
                  <img src="/assets/Frame (1).png" alt="Big tiny" />
                </div> */}
              Contact Us to Know More
            </button>
          </Container>
        </Grid>
      </div>
      <Grid item xs={12} md={12}>
        <>
          <br />
          <br />
          <br />
          <br />
        </>
      </Grid>
      <div className={classes.howitworks}>
        <Grid item xs={12} md={12}>
          {/* <Typography
            variant="h4"
            component="span"
            sx={{
              display: { xs: "block", md: "block" },
              color: "black",
              textAlign: "center",
            }}
          >
            How It Works?
          </Typography> */}
        </Grid>

        {/* <Box
          sx={{
            position: "relative",
            padding: "5% 0 0 0",
            left: "20%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Grid container spacing={0} sx={{ padding: "0" }}>
            <Grid item xs={12} md={6}> */}
        <div className={classes.gotplot}>
          <div className=" first__container">
            <div className="text__container">
              <h3>How it works</h3>
            </div>
            <div className=" plot__container">
              <div className={classes.got}>
                <CardClickable Photo="./assets/gotPlot.png" />
              </div>
              {/* </Grid> */}
              {/* <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                left: "20%",
                display: { xs: "none", md: "block" },
              }}
            > */}
              <div className={classes.got}>
                <CardClickable Photo="./assets/needHome.png" />
              </div>
            </div>
            <div className={classes.gotplotsbutton}>
              {/* <button onClick={intresetedhandler} className={classes.frame}>
            <div>
              <img src="/assets/Frame.png" />
            </div>
            I am intrested in letting my plot
          </button> */}
              <button onClick={buyinghandler} className="plot__button">
                {/* <div>
                  <img src="/assets/Frame (1).png" alt="Big tiny" />
                </div> */}
                I have a plot a let
              </button>
            </div>
          </div>
          <div className="video__container">
            <div className="container1">
              <img src="/assets/house1.jpg" alt="" className="house__img" />
            </div>
            <div className="container2">
              <img src="./assets/house2.jpg" alt="" className="house__img" />
            </div>
            <div className="container3">
              <img src="./assets/house3.jpg" alt="" className="house__img" />
            </div>
          </div>
        </div>
      </div>
      <section className=" architect__container">
        <img src="./assets/architectImage.png" alt="" />
      </section>
      {/* </Grid>
          </Grid>
        </Box> */}
      {/* <Box
          sx={{
            position: "relative",
            left: "12%",
            padding: "2%",
            display: { xs: "block", md: "none" },
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={10} md={6} sx={{ padding: "2% 0" }}>
              <CardClickable
                Photo="./assets/gotPlot.png"
                Link1="Check Listing"
              />
            </Grid>

            <Grid item xs={10} md={6} sx={{ padding: "2% 0" }}>
              <CardClickable
                Photo="./assets/needHome.png"
                Link1="Check Options"
              />
            </Grid>
          </Grid>
        </Box> */}
      <p className={classes.smart}>Self sufficient and smart</p>
      <div className={classes.iot}>
        <div>
          <img src="/assets/iott.png" />
        </div>
        <div>
          <img src="/assets/1-min (2).jpg" />
        </div>
      </div>
      <p className={classes.iotcontent}>
        The units are solar power enabled that can run basic services in offgrid
        locations. IOT and smart sensors are used for real time Monitoring and
        Automation. The Superstructure itself is "Smart" that detects and
        corrects any change in levels due to base ground condition. This means a
        flexible offgrid occupiable space that is highly reliable and efficient
      </p>
      <p className={classes.smart}>Sturdy and dependable</p>
      <div className={classes.sturdy}>
        <div className={classes.sturdyimg}>
          <img src="/assets/image 3.png" />
        </div>
        <div className={classes.sturdycontent}>
          <Sturdy
            num={"1"}
            para={" Self - levelling system for assembly at any terrain."}
          />
          <Sturdy
            num={"2"}
            para={"Quality engineered systems for long life."}
          />
          <Sturdy num={"3"} para={" Low maintenance system"} />
        </div>
      </div>

      <Grid item xs={12} md={12} sx={{ margin: "4% 0" }}>
        <Typography
          variant="h4"
          component="span"
          sx={{
            display: { xs: "block", md: "block" },
            color: "black",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Our Mission
        </Typography>
        <br />
        <br />
        <Typography
          variant="object2"
          component="span"
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: "24px",
            color: "text.secondary",
            textAlign: "center",
            padding: "0 15%",
          }}
        >
          Our concept of is to recognize and facilitate short stays with
          products that can be owned as a “movable habitable space”. A distinct
          conceptual idea is to delink ownership of “Habitable Space” and the
          Land or “Plot” on which the habitable space is placed.
          <br />
        </Typography>
        <Typography
          variant="object2"
          component="span"
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "15px",
            color: "black",
            textAlign: "left",
            padding: "0 2%",
          }}
        >
          Our concept of is to recognize and facilitate short stays with
          products that can be owned as a “movable habitable space”. A distinct
          conceptual idea is to delink ownership of “Habitable Space” and the
          Land or “Plot” on which the habitable space is placed.
          <br />
        </Typography>
        <br />
        <br />
        <Button
          variant="secondary"
          type="submit"
          onClick={() => {
            navigate("/aboutUs");
          }}
          sx={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          Know More
        </Button>
        <br />
        <br />
        <br />
      </Grid>
      {/* <div className={classes.faq}>
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
      </div> */}
      {/* <MailList /> */}
      <BottomBar />
    </React.Fragment>
  );
};
export default Home;
