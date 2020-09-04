import React from 'react';
import { starEmoji } from '../App';

export const Order = ({ orderItems }) => (
  <section className="order" data-testid="order-summary">
    <h2 className="order__heading" data-testid="order-heading">
      Order
    </h2>
    {orderItems &&
      orderItems.map(item => (
        <div
          className="order__item"
          key={`order-${item.id}`}
          data-testid="order-item"
        >
          <div className="order__name" data-testid={`order-name-${item.id}`}>
            <h3>🥟 {item.name}</h3>
          </div>
          <div className="order__price">
            <h3>
              <span
                className="order__rank"
                data-testid={`order-rank-${item.id}`}
              >
                {starEmoji(item.rank)}
              </span>{' '}
              <span data-testid={`order-price-${item.id}`}>£{item.price}</span>
            </h3>
          </div>
        </div>
      ))}
    {orderItems && orderItems.length > 0 ? (
      <h4 className="order__heading order__heading--total">
        Total Price:{' '}
        <span data-testid="order-total">
          £{orderItems.reduce((curr, val) => curr + val.price, 0)}
        </span>
      </h4>
    ) : (
      <h4
        className="order__heading--nothing"
        data-testid="order-heading-nothing"
      >
        It looks like you have an empty stomach, order now! 🥟🥟🥟
      </h4>
    )}
  </section>
);
