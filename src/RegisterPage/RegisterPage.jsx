import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink} from 'react-router-dom';
import { userActions } from "../_actions";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Footer } from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const registering = useSelector((state) => state.registeration.registering);

  const [openBackdrop, setopenBackdrop] = useState(false);

  const [userFormData, setuserformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setsubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setsubmitted(true);

    const { firstName, lastName, email, password } = userFormData;

    if (firstName && lastName && email && password) {
      console.log(userFormData);

      setopenBackdrop(true);

      dispatch(userActions.register(userFormData));

      return;
    }
  };

  const handleChange = (e) => {
    setuserformdata({ ...userFormData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                value={userFormData.firstName}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={submitted && !userFormData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={userFormData.lastName}
                error={submitted && !userFormData.lastName}
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={userFormData.email}
                error={submitted && !userFormData.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={userFormData.password}
                error={submitted && !userFormData.password}
                label="Password"
                type="password"
                onChange={handleChange}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={registering}
            className={classes.submit}
          >
          {registering ? <CircularProgress size={25}/> : 'Sign up'}
           
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link to='/login' variant="body2" component={RouterLink}>
                Sign in
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
      {/* {registering && (
            <Backdrop open={openBackdrop}>
              <CircularProgress
                thickness={3}
                size={80}
                style={{ color: "rgb(236 237 243)" }}
              />
            </Backdrop>
          )} */}
  
    </Container>
      
   
  );
}