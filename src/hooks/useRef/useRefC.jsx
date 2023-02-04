import React, { useEffect, useRef, useState } from "react";

const useRefC = () => {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>
        Latest {name} previous {prevName.current}
      </p>
    </div>
  );
};

export default useRefC;
