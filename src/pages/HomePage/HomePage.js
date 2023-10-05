import React from "react";
import './HomePage.css'
import Cards from '../../components/Cards/Cards'
const HomePage = () => {
    return (
        <div className="main-content-holder">
            <div className="content-grid-one">
                <Cards/>
            </div>
        </div>
    );
};

export default HomePage;