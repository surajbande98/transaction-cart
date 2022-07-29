import "../src/lib/dashboard.css";

import React from "react";

import App from "./App";

import "./index.css";
import { store } from "./_helpers";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import { configureFakeBackend } from "./_helpers";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

configureFakeBackend();

root.render(
  <BrowserRouter>
    <Provider store={store}>
  <App/>
  </Provider>
  </BrowserRouter>
);
