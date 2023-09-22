import { useState } from "react";

export default function MyUseState() {
  const [name, setName] = useState("trieu");
  return (
    <>
        <h1>use state</h1>
      <h4>my name is {name}</h4>
      <button onClick={() => setName("vu duc trieu")}>set name</button>
    </>
  );
}
