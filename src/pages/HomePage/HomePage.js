import React from "react";
import './HomePage.css'
import Cards from '../../components/Cards/Cards'
import Transactions from '../../components/Transactions/Transactions'
import Winnings from '../../components/Winnings/Winnings'
import Budget from "../../components/Budget/Budget";
import Subscriptions from "../../components/Subscriptions/Subscriptions";
import Savings from "../../components/Savings/Savings";
import Loans from "../../components/Loans/Loans";
import Financial from "../../components/Financial/Financial";
const HomePage = () => {
    return (
      <div className="main-content-holder">
          <div className="content-grid-one">
              <Cards />
              <Transactions />
              <Winnings />
          </div>
          <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Savings />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default HomePage