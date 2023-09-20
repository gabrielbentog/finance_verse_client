import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/statistics" element={<h1>Statistics Page</h1>} />
            <Route path="/customers" element={<h1>Customers Page</h1>} />
            <Route path="/diagrams" element={<h1>Diagrams Page</h1>} />
        </Routes>
    );
};

export default AppRoutes;
