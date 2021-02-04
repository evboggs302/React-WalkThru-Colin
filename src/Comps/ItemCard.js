import React, { useEffect, useState } from "react";

/*
This is not the best use of the useEffect hook as you'll see needless rerenders.

#1 RULE --> Hooks (esp useEffect) should only be used the at top-level.
        --> this component is small and rendered multiple times in a map which makes it a poor candidate for UseEffect.

*/

export default function ItemCard(props) {
  const { name, index, deleteFunc, updateFunc } = props;
  const [bool, changeBool] = useState(false);
  const [itemVal, updateItem] = useState(name);
  const deleteMe = () => deleteFunc(index);
  const editVal = () => changeBool(!bool);

  // USEEFFECT STRUCTURE
  // useEffect(() => {}, []);

  // ON MOUNT, and ON UNMOUNT
  useEffect(() => {
    console.log("ItemCard mounted to DOM.");
    return () => {
      console.log("ItemCard UNmounted to DOM.");
    };
  });

  // ON CHANGE
  useEffect(() => {
    console.log("EDIT bool changed");
  }, [bool]);

  const saveVal = async (val, index) => {
    await updateFunc(itemVal, index);
    changeBool(false);
  };
  return (
    <li>
      {bool ? (
        <input
          type="text"
          value={itemVal}
          onChange={(e) => updateItem(e.target.value)}
        />
      ) : (
        <div>{name}</div>
      )}
      <button onClick={deleteMe}>Delete Item</button>
      {bool ? (
        <button onClick={saveVal}>Save</button>
      ) : (
        <button onClick={editVal}>Edit Item</button>
      )}
    </li>
  );
}
