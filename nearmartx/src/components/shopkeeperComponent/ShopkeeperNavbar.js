// 1. ShopkeeperNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../shopkeeperComponent/assets_shopkeeper/companylogo2.png'

function ShopkeeperNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 bg-gray-800 text-white w-full z-10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/shop/dashboard" className="text-2xl font-bold text-blue-600">
                            <img className="h-10 w-20" src={companyLogo} alt="NearMart" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/shop/dashboard" className="hover:text-gray-400">Dashboard</Link>
                        <Link to="/shop/profile" className="hover:text-gray-400">Profile</Link>
                        <Link to="/shop/items" className="hover:text-gray-400">Manage Items</Link>
                        <Link to="/shop/transactions" className="hover:text-gray-400">Transactions</Link>
                        <Link to="/shop/invoice-management" className="hover:text-gray-400">Invoice Management</Link>
                        <Link to="/shop/logout" className="hover:text-gray-400">Logout</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-300 hover:text-gray-100 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-2 pb-4 border-t border-gray-700">
                            <Link to="/shop/dashboard" className="hover:text-gray-400 py-2">Dashboard</Link>
                            <Link to="/shop/profile" className="hover:text-gray-400 py-2">Profile</Link>
                            <Link to="/shop/items" className="hover:text-gray-400 py-2">Manage Items</Link>
                            <Link to="/shop/transactions" className="hover:text-gray-400 py-2">Transactions</Link>
                            <Link to="/shop/invoice-management" className="hover:text-gray-400 py-2">Invoice Management</Link>
                            <Link to="/shop/logout" className="hover:text-gray-400 py-2">Logout</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default ShopkeeperNavbar;