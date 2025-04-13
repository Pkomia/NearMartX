import React from "react";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ id, image, name, address, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/shop/${id}`)} // Navigate to shop detail page
    >
      {/* Shop Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Shop Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">{address}</p>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ShopCard;
