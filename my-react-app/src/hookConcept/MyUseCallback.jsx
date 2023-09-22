import { useCallback, useState } from "react"
import Todos from "./Todos";

 const MyUseCallback = () =>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const dem = useRef(0);
    

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodos = useCallback(() => {
        // dem = dem + 1;
        setTodos((t) => [...t, "todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodos} />
            <br />
            <div>
                Count:{count} <br />
                <button onClick={increment}>+</button>
            </div>

        </>
    )

}

export default MyUseCallback;