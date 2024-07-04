"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  console.log(items);

  const itemsData = [...items];
  console.log("itemsData", itemsData);

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
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
