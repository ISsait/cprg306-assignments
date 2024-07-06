"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items, onHandleClick }) {
  const [sortBy, setSortBy] = useState("name");
  
  // Create a defensive copy of the items array
  const itemsData = [...items];

  if (sortBy === "name") {
    itemsData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    itemsData.sort((a, b) => a.category.localeCompare(b.category));
  }

  function handleSortByNameClick() {
    setSortBy("name");
  }

  function handleSortByCategoryClick() {
    setSortBy("category");
  }

  return (
    <div className="">
      <div className="grid grid-cols-2">
        <button
          onClick={() => handleSortByNameClick()}
          className={`cursor-pointer text-black hover:text-white bg-blue-600 rounded-md m-4 p-2 border-solid border-green-800 border-2 ${
            sortBy === "name" ? "text-red-500 bg-blue-300" : ""
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortByCategoryClick()}
          className={`cursor-pointer text-black hover:text-white bg-blue-600 rounded-md m-4 p-2 border-solid border-green-800 border-2 ${
            sortBy === "category" ? "text-red-500 bg-blue-300" : ""
          }`}
        >
          Sort by Category
        </button>
      </div>
      {itemsData.map((item) => (
        <Item
          key={item.id}
          item={item}
          onHandleClick={onHandleClick}
        />
      ))}
    </div>
  );
}
