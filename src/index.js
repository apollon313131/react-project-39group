import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

import { store } from "./redux/store";
import { App } from "./App";

import { AuthContextProvider } from "@/context/AuthContextProvider";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
);
