import { ThemeProvider } from "styled-components";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const theme = {
  background: '#FFFFFF',
  primaryColor: '#242424',
  secondaryColor: '#A1A1A1',
  auxiliarColor: '#7A7A7A',
  borderColor: '#D0D0D0',
  borderHardColor: '#666666',
  primaryFont: 'Merriweather, serif',
  secondaryFont: 'Inter, sans-serif',
  headerWidth: '1280px'
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
