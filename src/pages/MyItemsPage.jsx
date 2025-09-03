import React, { useState } from 'react';
import { userAddableItems } from '../data/data';
import ItemCard from '../components/ItemCard';

const MyItemsPage = () => {
  const [myItems, setMyItems] = useState([]);
  const [itemToAdd, setItemToAdd] = useState(userAddableItems[0]?.id || '');

  const handleAddItem = () => {
    if (!itemToAdd) {
      alert('Please select an item to add.');
      return;
    }

    const selectedItem = userAddableItems.find((item) => item.id === parseInt(itemToAdd));

    if (selectedItem && !myItems.find(item => item.id === selectedItem.id)) {
      setMyItems([...myItems, selectedItem]);
    } else {
      alert('This item is already in your list.');
    }
  };

  const handleRemoveItem = (itemId) => {
    setMyItems(myItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="my-items-page">
      <h2>Manage Your Items for Sale</h2>

      <div className="add-item-form">
        <h3>Post a New Item</h3>
        <select value={itemToAdd} onChange={(e) => setItemToAdd(e.target.value)}>
          {userAddableItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="my-items-list">
        <h3>Your Listings</h3>
        {myItems.length === 0 ? (
          <p>You have no items for sale. Add one above!</p>
        ) : (
          <div className="item-list">
            {myItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
                showRemoveButton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItemsPage;
