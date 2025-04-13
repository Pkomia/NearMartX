import React from "react";
import ShopCard from '../components/ShopCard';


// dummy shop data
import shopData from '../Data/ShopData'


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Shops Near You</h1>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopData.map((shop) => (
          <ShopCard
            id={shop.id}
            image={shop.image}
            name={shop.name}
            address={shop.address}
            description={shop.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
