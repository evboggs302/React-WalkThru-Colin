import React, { useEffect, useState } from "react";

export default function ItemCard(props) {
  const { name } = props;
  return <div>{name}</div>;
}
