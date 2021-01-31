import React, { useEffect, useState } from "react";

export default function ItemCard(props) {
  const { name, index, deleteFunc } = props;
  let deleteMe = () => deleteFunc(index);
  const [editBool, changeBool] = useState(false);
  const [itemVal, updateItem] = useState(name)
  const editVal = () => changeBool(true);
  return (
    <li>
      {editBool ? <input type="text" /> : <div>{name}</div>}
      <button onClick={deleteMe}>Delete Item</button>
      <button onClick={editVal}>Edit Item</button>
    </li>
  );
}
