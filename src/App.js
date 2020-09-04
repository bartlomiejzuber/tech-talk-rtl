import React, { useState, useEffect } from 'react';
import { Menu } from './components/Menu';
import { Order } from './components/Order';
import pierogis from './data';
import { twoPierogis } from './fixtures';

export const starEmoji = rank => '🌟'.repeat(rank);

export const App = ({ withApiCall }) => {
  const [orderItems, setOrderItems] = useState([]);

  /**
   * Simulate call to API to get current basket data
   */
  useEffect(() => {
    if (withApiCall) {
      /**
       * Simulate API request lag
       */
      setTimeout(() => {
        setOrderItems(twoPierogis);
      }, 200);
    }
  }, [withApiCall]);

  return (
    <main>
      <header>
        <h1 data-testid="main-heading">Bart's Pierogis</h1>
      </header>

      <div className="container">
        <Menu
          pierogis={pierogis}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
        <Order orderItems={orderItems} />
      </div>
    </main>
  );
};
