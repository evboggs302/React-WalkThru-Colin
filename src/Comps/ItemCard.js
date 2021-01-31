import React, { useEffect, useState } from "react";

export default function ItemCard(props) {
  const { name, index, deleteFunc, updateFunc } = props;
  const [bool, changeBool] = useState(false);
  const [itemVal, updateItem] = useState(name);
  const deleteMe = () => deleteFunc(index);
  const editVal = () => changeBool(!bool);
  const saveVal = (val, index) => updateFunc(itemVal, index);
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
