"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsData from "./items.json";
import Link from "next/link";
//import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  const modImportedItems = itemsData.map((item) => ({...item, selected: false}));
  const [items, setItems] = useState(modImportedItems);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("updated items", items);
  };

  const handleClick = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return {...i, selected: !i.selected};
      }
      return i;
    });

    setItems(updatedItems);
  }

  return (
    <main className="m-4">
      <h1 className="p-3 text-3xl font-serif border">Shopping List</h1>
      <div>
        <NewItem onAddItem = {handleAddItem}/>
      </div>
      <div>
        <ItemList items = {items} onHandleClick = {handleClick}/>
      </div>
      <div>
        <Link className={linkStyle} href="./">
          Home
        </Link>
      </div>
    </main>
  );
}
