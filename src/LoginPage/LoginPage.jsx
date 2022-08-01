import {
  Avatar,
  Backdrop,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../_actions";

import {Link as RouterLink} from 'react-router-dom';

import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const [openBackdrop, setopenBackdrop] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    authentication: { loggingIn },
  } = useSelector((state) => {
    return state;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitted(true);
    if (username && password) {
      setopenBackdrop(true);
      dispatch(userActions.login(username, password, navigate));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
     
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            autoComplete="off"
            error={submitted && !username}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            autoComplete="current-password"
            error={submitted && !password}
            
          />

          <Button
            type="submit"
            fullWidth
            color="primary"
            disabled={loggingIn}
            className={classes.submit}

          >
            {loggingIn && <CircularProgress size={25}/>}
            {!loggingIn && 'Continue'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/register' variant="body2" component={RouterLink}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={5}>
        <Footer />
      </Box>
      {/* {loggingIn && (
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
};

export default LoginPage;
