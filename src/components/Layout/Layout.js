import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";
import { ThemeContext } from "../../App";
import { LoginSignup } from "../../pages/LoginSignup/LoginSignup";

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const isLoggedIn = localStorage.getItem("user");

    return (
        <SLayout>
            {isLoggedIn && <Sidebar />}
            <SMain theme={theme}>{children}</SMain>
        </SLayout>
    );
};

export default Layout;
