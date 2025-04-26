import React from "react";

const shopItemSearch= ({shopItemSearch, onKeyDown}) => {
    return (
        <div className="flex items-center justify-end mt-4 w-[60%]">
        <input
            type="text"
            placeholder="Search for a shop or item..."
            className="border border-gray1 rounded-lg py-2 px-4 w-full"
            onChange={(e) => shopItemSearch(e.target.value)}
            onKeyDown={onKeyDown} // Call the function on key press
        />
        </div>
    );
}

export default shopItemSearch;