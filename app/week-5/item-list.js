"use client";

import Item from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    itemsData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    itemsData.sort((a, b) => a.category.localeCompare(b.category));
  }

  function handleSortByNameClick() {
    setSortBy("name");
    console.log(sortBy);
  }

  function handleSortByCategoryClick() {
    setSortBy("category");
    console.log(sortBy);
  }

  return (
    <div className="">
      <div className="grid grid-cols-2">
        <button
          onClick={() => handleSortByNameClick()}
          className={`cursor-pointer text-black hover:text-blue-700 bg-green-300 rounded-md m-4 p-2 border-solid border-green-800 border-2 ${
            sortBy === "name" ? "text-red-500 bg-green-700" : ""
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortByCategoryClick()}
          className={`cursor-pointer text-black hover:text-blue-700 bg-green-300 rounded-md m-4 p-2 border-solid border-green-800 border-2 ${
            sortBy === "category" ? "text-red-500 bg-green-700" : ""
          }`}
        >
          Sort by Category
        </button>
      </div>
      {itemsData.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
