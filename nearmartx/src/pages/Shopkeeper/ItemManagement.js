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
        <div className="container mt-4 d-flex flex-column align-items-center">
            <h2 className="mb-4 text-primary">Item Management</h2>
            <div className="card p-4 shadow-sm w-full space-between">
                <input
                    type="text"
                    className="form-control mb-3"
                    name="name"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control mb-3"
                    name="price"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control mb-3"
                    name="quantity"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                />
                <button className="btn btn-primary w-100" onClick={handleAddItem}>
                    Add Item
                </button>
            </div>

            <div className="table-responsive mt-5 w-full">
                <table className="table table-bordered text-center shadow-sm w-full">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemManagement;