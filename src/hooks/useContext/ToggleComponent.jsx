import React from "react";
import themeState from "./UseContextA";

const ToggleComponent = () => {
  const { toggle, isDark } = themeState();

  const style = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
  };

  return (
    <div>
      <h1 style={style}>ToggleComponent</h1>
      <button onClick={() => toggle()}>Toggle Theme</button>
    </div>
  );
};

export default ToggleComponent;
