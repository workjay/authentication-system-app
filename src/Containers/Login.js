import { Box, Link, Typography, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as DomLink } from "react-router-dom";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div": {
      padding: 30,
      width: "100%",
      maxWidth: 700,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.common.white,
      "&>p": {
        margin: "10px 0 20px",
      },
    },
  },
  box: {
    padding: 20,
    marginBottom: 30,
    width: "100%",
    maxWidth: 500,
    "&>h2": {
      marginBottom: 10,
    },
    "&>p": {
      marginBottom: 10,
    },
    "& span": {
      color: theme.palette.primary.main,
    },
    "&>button": {
      color: theme.palette.common.white,
      fontWeight: 700,
    },
  },
}));

export default function Login() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box component={Paper}>
        <Typography variant="h1">Login</Typography>
        <Typography variant="body1">Select where you want to login.</Typography>
        <Box className={classes.box} component={Paper}>
          <Typography variant="h2">
            As a <span>Customer</span>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elementum vitae mi quis molestie. Vestibulum ac gravida dui.
          </Typography>
          <Button variant="contained" href="/customer-login">
            Login
          </Button>
        </Box>
        <Box className={classes.box} component={Paper}>
          <Typography variant="h2">
            As a <span>Admin</span>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elementum vitae mi quis molestie. Vestibulum ac gravida dui.
          </Typography>
          <Button variant="contained" href="/admin-login">
            Login
          </Button>
        </Box>
        <Typography variant="body1">
          Don't have an account yet?{" "}
          <Link
            color={"primary"}
            component={DomLink}
            to={"/signup"}
            underline="hover"
          >
            Signup
          </Link>{" "}
          here.
        </Typography>
      </Box>
    </Box>
  );
}
