import {React, useEffect, useState } from "react";
import ShopCard from '../components/ShopCard';
import Shop_search from "../components/Shop_search";
// dummy shop data
import shopData from '../Data/ShopData'


const Home = () => {
 
  const [shopData1, setShopData] = useState(shopData);
  const [searchText, setSearchText] = useState('');
  const [triggerSearch, setTriggerSearch] = useState(false); 

  // Function to be called on input key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTriggerSearch(true); // trigger search only on Enter
    }
  };
  
  // Dummy data for shops
  const shopItemSearch = (searchTerm) => {
    // Implement search logic here
    console.log("Searching for:", searchTerm);
    setSearchText(searchTerm); 
  };

  useEffect(() => { 
    
    if(triggerSearch)
    {
      console.log(searchText);
      const filteredShops = shopData.filter((shop) =>
        shop.name.toLowerCase().includes(searchText.toLowerCase()) ||
        shop.description.toLowerCase().includes(searchText.toLowerCase())
      );
      setShopData(filteredShops); // Update the shop data with filtered results
      console.log(filteredShops);
      setTriggerSearch(false); // Reset trigger after search
    }
  }, [triggerSearch]);

  return (
    <div>
      {/* search item or shop */}
        <div className="flex flex-col items-center mt-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-end">
          <span>search shop or item by name</span>
          <Shop_search shopItemSearch={shopItemSearch} onKeyDown={handleKeyDown}/>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shops Near You</h1>

        {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopData1.map((shop) => (
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
