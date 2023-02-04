import React, { useEffect, useMemo, useState } from "react";

const UseMemoA = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubled = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#000" : "#fff",
      color: dark ? "#fff" : "#000",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);
  return (
    <div>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>
        <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      </div>
      <div style={themeStyles}>{doubled}</div>
    </div>
  );
};

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemoA;
