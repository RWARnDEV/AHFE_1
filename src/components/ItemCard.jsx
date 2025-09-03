import React from 'react';

const ItemCard = ({ item, onAddToCart, onRemove, showRemoveButton }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">${item.price.toFixed(2)}</p>
        <p className="item-description">{item.description}</p>
        <p className="item-seller">Sold by: {item.seller}</p>
        {onAddToCart && <button onClick={() => onAddToCart(item)}>Buy Now</button>}
        {showRemoveButton && onRemove && <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>}
      </div>
    </div>
  );
};

export default ItemCard;
