import React, { useEffect, useState } from "react";

const List = ({ getItems, sum }) => {
  const [items, setItems] = useState([]);
  console.log(sum);
  useEffect(() => {
    console.log("updating");
    setItems(getItems());
  }, [getItems]);

  return items.map((el) => <div key={el}>{el}</div>);
};

export default List;
