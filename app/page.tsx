"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Mini Clicker</h1>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: 10, fontSize: 18, backgroundColor: "red"}}>
        Click me
      </button>
    </main>
  );
}
