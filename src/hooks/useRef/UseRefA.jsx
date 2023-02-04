import React, { useRef } from "react";

const UseRefA = () => {
  const inputRef = useRef();

  const _handleFocus = () => {
    inputRef.current.focus();
    // inputRef.current.value = "Focused";
    inputRef.current.placeholder = "Enter...";
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={_handleFocus}>Focus</button>
    </div>
  );
};

export default UseRefA;
