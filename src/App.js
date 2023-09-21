import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginSignup } from './pages/LoginSignup/LoginSignup';
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login status
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      navigate('/home');
    }
  };

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Finance Verse</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Layout>
          <AppRoutes />
        </Layout>

      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
