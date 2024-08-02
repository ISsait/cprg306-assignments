"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import itemsData from "./items.json";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import {dbAddItem, dbGetItems} from "../_services/shopping-list-services";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";

  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
    useEffect( () => {
        if(user){
        dbGetItems(user, setItems);
        }
    }, [user]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    // console.log("updated items", items);
    dbAddItem(user, newItem);
  };

  const handleClick = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, selected: !i.selected };
      }
      return i;
    });

    setItems(updatedItems);
  };

  return (
    <main className="m-4">
      {user ? (
        <div>
          <span className="grid grid-cols-2">
            <p>Logged in as: {user.email}</p>
          </span>
          <h1 className="p-3 text-3xl font-serif border">Shopping List</h1>
          <div>
            <NewItem onAddItem={handleAddItem} />
          </div>
          <div>
            <ItemList items={items} onHandleClick={handleClick} />
          </div>
        </div>
      ) : (
        <div>
          <p>You must be logged in to view this page</p>
          <Link href="/week-10/">Click here to return to the sign in page</Link>
        </div>
      )}

      <div>
        <Link className={linkStyle} href="./">
          Back to sign in page
        </Link>
      </div>
      <button onClick={() => dbGetItems(user)}>test</button>
    </main>
  );
}
