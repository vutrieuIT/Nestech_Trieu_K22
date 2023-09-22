import { useReducer } from "react";

const initialTodos = [
    {
        id:1,
        title:"todo1",
        complete:false,
    },
    {
        id:2,
        title:"todo2",
        complete:false,
    },
];

const reducer = (state, action) => {
    switch(action.type){
        case "COMPLETE":
            return state.map((todo) => {
                if(todo.id === action.id){
                    return {...todo, complete:!todo.complete};
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

export default function MyUseReducer(){
    // todo list
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) =>{
        dispatch({type: "COMPLETE", id:todo.id});
    }

    return (
        <>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <label>
                            <input type="checkbox" 
                            checked = {todo.complete}
                            onChange={()=>handleComplete(todo)}
                            />
                            {todo.title}
                            {todo.complete ? "true" :"false"}
                        </label>
                    </div>
                ))
            }
        </>
    )
}