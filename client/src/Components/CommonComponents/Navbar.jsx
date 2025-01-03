import "../../App.css";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./common.css";
import { maxWidth } from "@mui/system";

// -----------------external css used here---------------------
const ResponsiveAppBar = () => {
  const [logOption, setLogOption] = useState("Login/Register");
  const [logPath, setLogPath] = useState("/login");
  const pages = [
    <Link className="navMenu" to="/sessions">Products</Link>,
    <Link className="navMenu" to="/Plots">Plots</Link>,
    <Link className="navMenu" to="/aboutUs">About Us</Link>,
    <Link className="navMenu" to="/contact">Contact Us</Link>,
    <Link className="navMenu" to={logPath}>{logOption}</Link>,
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (loggedUser) {
      setLogOption("Account");
      setLogPath("/adminPanel");
    } else {
      setLogOption("Login/Register");
      setLogPath("/login");
    }
  }, [loggedUser]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", paddingLeft: "6%", paddingRight: "6%", }} >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography noWrap component="div" sx={{ mr: 2, height: "70px", display: { xs: "none", md: "flex" } }} >
            <a href="/"> <img src="../assets/bigTinyLogo.jpg" height="40px" width="250px" alt="companyLogo" className="img" /> </a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, position: "relative", right: "10%", }} >

            {/*------------------------------- hamburger button -------------------------------*/}
            <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{ color: "black" }} >
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} dense="true"
              anchorOrigin={{ vertical: "bottom", horizontal: "left", }}
              transformOrigin={{ vertical: "top", horizontal: "left", }}
              sx={{ display: { xs: "block", md: "none" }, }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h1" noWrap component="div" sx={{ flexGrow: 1, height: "75px", position: "relative", bottom: "25px", display: { xs: "flex", md: "none" }, }}>
            <a href="/"> <img src="../assets/hoffrTop.png" height="50px" alt="companyLogo" /> </a>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, position: "relative", left: "65%", }} >
            {pages.slice(4, 5).reverse().map((page, index) => (
              <Button key={index} variant="outlined" onClick={handleCloseNavMenu}
                sx={{
                  my: 2, mr: 5, textTransform: "none", color: "black", display: "block", borderColor: "#FFB923",
                  borderStyle: "double", margin: "0", "&:hover": { color: "#FFB923", backgroundColor: "inherit" }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, position: "relative", left: "10%", }} >
            {pages.slice(0, 4).map((page, index) => (
              <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, textTransform: "none", color: "black", display: "block", margin: "0", "&:hover": { color: "#FFB923", backgroundColor: "inherit" } }} >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
