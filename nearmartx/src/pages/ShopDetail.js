import React from "react";
import { useParams } from "react-router-dom";

// dummy shop data
import shopData from '../Data/ShopData'

const ShopDetail = () => {
  const { id } = useParams(); // Get shop ID from URL
  const shop = shopData.find((shop) => shop.id === parseInt(id));

  if (!shop) {
    return <p className="text-center text-red-500 mt-10">Shop not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <img src={shop.image} alt={shop.name} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold text-gray-800 mt-6">{shop.name}</h1>
      <p className="text-gray-600 mt-2">{shop.address}</p>
      <p className="text-gray-600 mt-4">{shop.description}</p>
    </div>
  );
};

export default ShopDetail;
