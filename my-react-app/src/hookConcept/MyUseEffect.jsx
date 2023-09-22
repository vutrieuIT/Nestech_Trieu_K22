import { useEffect, useState } from "react";

export default function MyUseEffect() {
  const [year, setYear] = useState(2002);
  const [age, setAge] = useState(1);
  useEffect(() => {
    setAge(2023 - year);
  }, [year, setYear]);

  function changeYear(event) {
    setYear(event.target.value);
  }
  return (
    <>
      <h1>use effect</h1>
      <label htmlFor="">birth year</label>
      <input type="number" onChange={changeYear} />
      <p>age : {age}</p>
    </>
  );
}
