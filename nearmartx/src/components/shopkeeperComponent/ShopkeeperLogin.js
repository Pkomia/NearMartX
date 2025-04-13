// 2. ShopkeeperLogin.js
import React, { useState } from 'react';

function ShopkeeperLogin() {
    const [credentials, setCredentials] = useState({ id: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', credentials);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Shopkeeper Login</h2>
            <input type="text" name="id" placeholder="Shop ID" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default ShopkeeperLogin;