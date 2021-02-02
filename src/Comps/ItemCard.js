import React, { useEffect, useState, useCallback, memo } from "react";

/*
This is not the best use of the useEffect hook as you'll see needless rerenders.

#1 RULE --> Hooks (esp useEffect) should only be used the at top-level.
        --> this component is small and rendered multiple times in a map which makes it a poor candidate for UseEffect.

*/

///////////////////////////////////////////////////////////////
/*

The real benefits of Functional components come when trying to optimize performance. The useCallback
hook, React.memo(()=>{render}, ()=>{prop comparison}) structure, useMemo hook, and lazy/Suspense
hooks provide a TON of added functionality and specificity.

*/
///////////////////////////////////////////////////////////////

// export default function ItemCard(props) {
export default memo(
  function ItemCard(props) {
    const { name, index, deleteFunc, updateFunc } = props;
    console.log("ItemCard ", name.toUpperCase(), " rendered");
    const [bool, changeBool] = useState(false);
    const [itemVal, updateItem] = useState(name);
    // const deleteMe = () => deleteFunc(index); // added in-line below
    const editVal = useCallback(() => changeBool(!bool), [bool]);
    const saveVal = (val, index) => updateFunc(itemVal, index);

    // USEEFFECT STRUCTURE
    // useEffect(() => {}, []);

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
        <button
          onClick={useCallback(() => deleteFunc(index), [deleteFunc, index])}>
          Delete Item
        </button>
        {bool ? (
          <button onClick={saveVal}>Save</button>
        ) : (
          <button onClick={editVal}>Edit Item</button>
        )}
      </li>
    );
    // }
  },
  (oldProps, newProps) => {
    console.log(
      "prop comparison fired. \n old: ",
      oldProps,
      "\n new: ",
      newProps
    );
    // console.log(oldProps.list.indexOf(newProps.name) + 1);
    return oldProps.list.indexOf(newProps.name + 1);
  }
);
