"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleOnSubmit(event) {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    console.log(newItem);

    alert(
      `New item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category} has been added to the list!`
    );

    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 max-w-6/12 bg-green-950 w-full max-w-md p-5 rounded-lg pt-2">
        <h1 className="text-2xl text-green-200">Add New Item</h1>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Item name"
          className="text-black text-center rounded-md"
        />
        <input
          required
          type="number"
          value={quantity}
          min="1"
          max="99"
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="number-input text-black text-center rounded-md"
        />
        <select
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="text-black text-center rounded-md"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
        <button className="bg-blue-800 hover:bg-blue-500 active:bg-yellow-300 text-white font-bold py-2 px-4 rounded-md">
          Add Item
        </button>
      </div>
    </form>
  );
}
