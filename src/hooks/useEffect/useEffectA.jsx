import React, { useEffect, useState } from "react";

const UseEffectA = () => {
  const [text, setText] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [text]);
  return (
    <>
      <div>
        <button onClick={() => setText("posts")}>Posts</button>
        <button onClick={() => setText("users")}>Users</button>
        <button onClick={() => setText("comments")}>Comments</button>
      </div>
      <h1>{text}</h1>
    </>
  );
};

export default UseEffectA;
