import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const countRef = useRef(0);
  const focusRef = useRef(); // Start from 0
  const [input, setInput] = useState("");
  const isFirstChange = useRef(true);

  useEffect(() => {
    focusRef.current.focus();
    if (!isFirstChange.current) {
      countRef.current = countRef.current + 1;
    } else {
      isFirstChange.current = false;
    }
  }, [input]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={focusRef}
      />
      <div>{countRef.current}</div>
    </>
  );
}

export default Counter;
