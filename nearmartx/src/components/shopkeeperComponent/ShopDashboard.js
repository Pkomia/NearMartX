import React from 'react';
import ShopkeeperNavbar from './ShopkeeperNavbar';
import InteractiveDashboard from './InteractiveDashboard';

function ShopDashboard() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <ShopkeeperNavbar />
            <div className="flex-grow">
                <InteractiveDashboard />
            </div>
        </div>
    );
}

export default ShopDashboard;