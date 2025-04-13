// 5. ItemManagement.js
import React, { useState } from 'react';

function ItemManagement() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', price: '', quantity: '' });

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem({ name: '', price: '', quantity: '' });
    };

    return (
        <div>
            <h2>Item Management</h2>
            <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
            <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
            <input type="number" name="quantity" placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
            <button onClick={handleAddItem}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price} - Qty: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemManagement;