import React, { useEffect, useState } from 'react';
import "./Transactions.css";
import { iconsImgs, itemImgs } from "../../utils/images";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const authToken = user?.auth_token;

  const sendRequest = async (url, method, data) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      if (authToken) {
        headers['Authorization'] = `${authToken}`;
      }

      const response = await fetch(`http://localhost:3000/api/v1/${url}`, {
        method,
        headers
      });

      return response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await sendRequest('transactions', 'GET', null);
        if (response && response.data) {
          setTransactions(response.data); // Atualiza o estado com as transações da API
        }
      } catch (error) {
        console.error('Erro ao obter as transações da API', error);
      }
    };

    fetchTransactions();
  }, [authToken]);

  return (
    <div className={`grid-one-item grid-common grid-c2 ${transactions.length > 3 ? 'scrollable' : ''}`}>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Transações</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Plus Icon" />
        </button>
      </div>

      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((transaction) => (
            <div className="grid-item" key={transaction.attributes.id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img src={itemImgs.dollar_sign} alt="" />
                </div>
                <p className="text">
                  {transaction.attributes.item_name} <span>{transaction.attributes.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-lavander">R$ {transaction.attributes.amount || 0}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
