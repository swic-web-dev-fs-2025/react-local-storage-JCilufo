import { useEffect, useState } from "react";

import useCount from "./use-count.js";

export default function Count() {
  const { count, increment, decrement } = useCount(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Component re-rendered");
  });

  useEffect(() => {
    console.log("Runs once on mount");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Runs whenever 'count' OR 'name' changes
  useEffect(() => {
    console.log("Name changed");
  }, [name]);

  return (
    <main>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        className="rounded bg-green-500 px-4 py-3 text-white"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="rounded bg-red-500 px-4 py-3 text-white"
      >
        -
      </button>

      <div className="mt-4">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border px=2 py-1"
          placeholder="Enter your name"
        />
        {name && <p className="mt-2">Hello, {name}!</p>}
      </div>
    </main>
  );
}
