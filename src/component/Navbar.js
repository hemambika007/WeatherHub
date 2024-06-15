import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    position: "sticky",
    width: "100%",
    background: "transparent",
  },
  navbarBrand: {
    textDecoration: "none",
    fontWeight: "bolder",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#ff9800",
    },
    opacity: "0%",
  },
  toolbar: {
    display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
  },
  logoContainer: {
    flex: "1.3",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  logo: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bolder",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#ff9800",
    },
  },
  rightSection: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoutButton: {
    color: "#fff",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#ff9800",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  // const handleLocation = async () => {
  //   handlelocation()
  // };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <Typography
                variant="h5"
                component={Link}  
                to="/"
                className={classes.logo}
              >
                Weather App
              </Typography>
              
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
