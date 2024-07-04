"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: generateRandomString(18),
      name,
      quantity,
      category,
    };

    console.log(newItem);

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex items-center justify-center"
    >
      <div className="grid grid-cols-2 gap-4 items-center justify-center max-w-6/12 bg-green-950 max-w-md p-5 pt-2 mt-10 rounded-lg border-solid border-2 border-sky-300">
        <h1 className="flex text-2xl text-sky-300 col-span-2 justify-center">
          Add New Item
        </h1>
        <label>
          Item Name
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Item name"
            className="text-black text-center rounded-md w-full h-8"
          />
        </label>
        <label>
          Quantity
          <input
            required
            type="number"
            value={quantity}
            min="1"
            max="99"
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="number-input text-black text-center rounded-md w-full h-8"
          />
        </label>
        <select
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="text-black text-center rounded-md col-span-2 h-8"
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
        <button className="bg-blue-800 hover:bg-blue-500 active:bg-yellow-300 text-white font-bold py-2 px-4 rounded-md col-span-2">
          Add Item
        </button>
      </div>
    </form>
  );
}
