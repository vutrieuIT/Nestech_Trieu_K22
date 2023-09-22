import { useEffect, useRef, useState } from "react";

export default function MyUseRef(){
    const [inputValue, setInputValue] = useState("");
    const cnt = useRef(0);

    useEffect(()=>{
        cnt.current = cnt.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h1>render cnt: {cnt.current}</h1>
        </>
    )
}