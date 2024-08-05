import React from 'react'
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './output.css'; // Import your global CSS here
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeWrapper = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <NextUIProvider className='h-full w-full'>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeWrapper>
      <Router>
        <App />
      </Router>
    </ThemeWrapper>
  </React.StrictMode>
);