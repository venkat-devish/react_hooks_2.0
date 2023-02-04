import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

const UseCallBack = () => {
  const [number, setNumber] = useState(+1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const getSumItems = useMemo(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const _handleNumberChange = (e) => {
    setNumber(+e.target.value);
  };

  const styles = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={styles}>
      <input type="text" value={number} onChange={_handleNumberChange} />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <List getItems={getItems} sum={getSumItems} />
    </div>
  );
};

export default UseCallBack;
