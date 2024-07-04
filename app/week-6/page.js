"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("updated items", items);
  };

  return (
    <main className="m-4">
      <h1 className="p-3 text-3xl font-serif border">Shopping List</h1>
      <div>
        <NewItem onAddItem = {handleAddItem}/>
      </div>
      <div>
        <ItemList items = {items}/>
      </div>
      <div>
        <Link className={linkStyle} href="./">
          Home
        </Link>
      </div>
    </main>
  );
}
