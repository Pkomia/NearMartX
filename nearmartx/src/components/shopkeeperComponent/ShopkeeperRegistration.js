// 1. ShopkeeperRegistration.js
import React, { useState } from 'react';

function ShopkeeperRegistration() {
    const [formData, setFormData] = useState({
        shopName: '',
        category: '',
        address: '',
        contact: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Your Shop</h2>
            <input type="text" name="shopName" placeholder="Shop Name" onChange={handleChange} required />
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Contact" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default ShopkeeperRegistration;