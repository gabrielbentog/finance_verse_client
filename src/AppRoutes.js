import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { LoginSignup } from "./pages/LoginSignup/LoginSignup";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/statistics" element={<h1>Statistics Page</h1>} />
                <Route path="/customers" element={<h1>Customers Page</h1>} />
                <Route path="/diagrams" element={<h1>Diagrams Page</h1>} />
            </Route>
            <Route path="/login" element={< LoginSignup />} />
        </Routes>
    );
};

export default AppRoutes;
