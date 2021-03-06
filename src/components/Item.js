import React, { useState, useEffect } from 'react';
import { starEmoji } from '../App';

export const Item = ({ item, orderItems, setOrderItems }) => {
  const [inOrder, setInOrder] = useState(false);

  useEffect(() => {
    const intervalHandler = setTimeout(() => {

    }, 5000);
  }, [])

  return (
    <div key={item.id} className="item" data-testid="item">
      <div className="item__info">
        <h3 className="item__heading" data-testid={`item-heading-${item.id}`}>
          {item.name}
        </h3>
        <span className="item__rank" data-testid={`rank-${item.id}`}>
          {starEmoji(item.rank)}
        </span>
        <p
          className="item__info-description"
          data-testid={`item-description-${item.id}`}
        >
          {item.desc}
        </p>
        <button
          data-testid={`add-item-${item.id}`}
          type="button"
          onClick={() => {
            setInOrder(!inOrder);

            if (!inOrder) {
              setOrderItems([...orderItems, item]);
            } else {
              setOrderItems([
                ...orderItems.filter(orderItem => orderItem.id !== item.id),
              ]);
            }
          }}
        >
          {inOrder
            ? `Remove ${item.name} | £${item.price}`
            : `Add ${item.name} | £${item.price}`}
        </button>
      </div>
      <div className="item__media">
        <img
          data-testid={`image-${item.id}`}
          src={item.image}
          alt={item.name}
        />
      </div>
    </div>
  );
};
