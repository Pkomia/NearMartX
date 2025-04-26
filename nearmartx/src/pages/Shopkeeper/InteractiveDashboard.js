// 2. InteractiveDashboard.js
import React from 'react';
 

function InteractiveDashboard() {
    
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Interactive Dashboard</h2>
            <div className="flex flex-wrap justify-around gap-4">
                <div className="w-full md:w-1/2 p-4">
                    <h3 className="text-lg font-semibold mb-2 text-center">Weekly Sales</h3>
                    {/* <Bar data={salesData} /> */}
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h3 className="text-lg font-semibold mb-2 text-center">Category Distribution</h3>
                    {/* <Pie data={categoryData} /> */}
                </div>
            </div>
        </div>
    );
}

export default InteractiveDashboard;