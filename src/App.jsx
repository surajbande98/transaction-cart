import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "./_actions";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import HomePage from "./HomePage/HomePage";
import { PrivateRoute } from "./components/PrivateRoute";
import Accounts from "./HomePage/Accounts/Accounts";
import Messages from "./HomePage/Messages/Messages";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { theme as muTheme } from "./theme";
import CheckoutPage from "./HomePage/Cards/CardOrder/CardOrderCheckout";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  // const location = useLocation();

  const [theme, setTheme] = useState(muTheme);

  const muiTheme = createTheme(theme);

  const alert = useSelector((state) => state.alertReducer);

  const dispatch = useDispatch();

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";

    setTheme({
      ...theme,
      palette: {
        ...theme.palette,
        type: newPaletteType,
      },
    });
  };

  console.log(theme);

  // Detect change in route
  // useEffect(() => {
  //   dispatch(alertActions.clear());
  // }, [location, dispatch]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(alertActions.clear());
  };

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h2>No match</h2>} />

          <Route
            path="finance"
            element={
              <PrivateRoute>
                <HomePage setTheme={toggleDarkTheme} />
              </PrivateRoute>
            }
          >
            <Route index element={<Accounts />} />
            <Route path="holders" element={<Accounts />} />
            <Route path="messages" element={<Messages />} />
            <Route path="tasks" element={<Accounts />} />
            <Route path="cards" element={<CheckoutPage/>} />
            <Route path="*" element={<h2>IM new</h2>} />
          </Route>
        </Routes>
      </ThemeProvider>

      {alert && alert.message && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>
      )}
      {/* {alert && alert.message && (
            <div className={`col-md-6 col-md-offset-3 alert ${alert.type}`}>
              {alert.message}
            </div>
          )} */}
    </>
  );
}

export default App;

