import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, getDoc } from "firebase/firestore";


// add an item to the db
export async function dbAddItem (user, newItem) {
  try {
    const docRef = await addDoc(collection(db, "users", user.uid, "items"), newItem);
    console.log("Item added to db", docRef.id);
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

// // get individual item from db
// const getItem = doc(db, "users", "user1", "items", "item1_1");
// const docSnap = await getDoc(docRef);
 
// if (docSnap.exists()) {
//   console.log("Item data:", docSnap.data());
// } else {
//   console.log("No such item!");
// }


// get all items from db
export async function dbGetItems(user, setItemsList) {
  try {
    const q = query(collection(db, "users", user.uid, "items"));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setItemsList(items);
  } catch (error) {
    console.error("Error getting items: ", error);
  }
}

// // update an item in the db
// import { doc, updateDoc } from "firebase/firestore";
 
// const updateItem = doc(db, "users", "user1", "items", "item1_1");
// await updateDoc(docRef, {
//   quantity: 12, // update the quantity to 12
// });


// // delete an item from the db
// import { doc, deleteDoc } from "firebase/firestore";
 
// const deleteItem = doc(db, "users", "user1", "items", "item1_1");
// await deleteDoc(docRef);