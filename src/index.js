import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//Theming
import { createTheme, ThemeProvider } from '@mui/material';






const theme = createTheme({
  palette: {
    primary: {
      main: "#263238"
    },
    secondary: {
      main: "#ffca28"
    }
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>

);


