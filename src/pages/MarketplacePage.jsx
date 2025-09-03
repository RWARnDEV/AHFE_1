import React, { useState } from 'react';
import { marketplaceItems as initialItems } from '../data/data';
import ItemCard from '../components/ItemCard';

const MarketplacePage = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddToCart = (item) => {
    // For the prototype, we'll just log the action.
    // In a real app, this would trigger a purchase flow.
    console.log('Attempting to buy:', item.name);
    alert(`You've added "${item.name}" to your cart! (Prototype)`);
  };

  return (
    <div className="marketplace-page">
      <h2>Browse the Marketplace</h2>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
