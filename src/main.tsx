import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {ThemeProvider} from '@emotion/react';
import {CssBaseline}  from '@mui/material';
import { Provider } from "react-redux";
import { createTheme } from '@mui/material/styles';
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = {createTheme({
        palette: {
            primary: {
                main: "#061148",
            },
        },
    })}>
      <CssBaseline/>
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>
  </React.StrictMode>
)
