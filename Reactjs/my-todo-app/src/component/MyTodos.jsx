import { useContext, useReducer, useState } from "react";
import { ItemTodo } from "./ItemTodo";
import TodoListContext from "./TodoListContext";

// init todolist
const initTodoList = {
  cntId: 0,
  todoList: [],
  originTodoList: [],
  filter: "all",
};

// const action type of reducer
const ADD_TODO = "add";
const DELETE_TODO = "delete";
const CHANGE_STATUS = "status";
const FILTER_STATUS = "filter";

const reducer = (state, action) => {
  const mainTodoList = useContext(TodoListContext);
  switch (action.type) {
    case ADD_TODO:
      if (action.text !== "") {
        const newCntId = state.cntId + 1;
        const newTodo = {
          text: action.text,
          status: "doing",
          id: newCntId,
        };
        mainTodoList.setList(...mainTodoList.list, newTodo);
        // const addTodosList = [...state.originTodoList, newTodo];
        state.todoList = mainTodoList;
      }

      break;
    case DELETE_TODO:
      console.log(action);
      const updatedTodoList = state.todoList.filter((todo) => {
        console.log(`todo.id ${todo.id}, id : ${action.id}`);
        return todo.id !== action.id;
      });
      const updatedOriginTodoList = state.originTodoList.filter((todo) => {
        console.log(`todo.id ${todo.id}, id : ${action.id}`);
        return todo.id !== action.id;
      });
      return {
        ...state,
        todoList: updatedTodoList,
        originTodoList: updatedOriginTodoList,
      };

    case CHANGE_STATUS:
      return state.todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: todo.status == "doing" ? "done" : "doing" };
        } else {
          return todo;
        }
      });
    case FILTER_STATUS:
      if (action.filter === "all") {
        return {
          ...state,
          todoList: state.originTodoList,
          filter: action.filter,
        };
      } else {
        const filterArray = state.originTodoList.filter(
          (item) => item.status === action.filter
        );
        return { ...state, todoList: filterArray, filter: action.filter };
      }
    default:
      console.log("action type not found");
      return state;
  }
};

export default function MyTodos() {
  //   const { list, setList } = useContext(TodoListContext);
  //   console.log(list);
  const [todos, dispatch] = useReducer(reducer, initTodoList);
  const [todoText, setTodoText] = useState("");

  const deleteTodo = (todo_id) => {
    console.log(todo_id);
    dispatch({ type: DELETE_TODO, id: todo_id });
  };

  const addTodo = () => {
    console.log(ADD_TODO);
    dispatch({ type: ADD_TODO, text: todoText });
    setTodoText("");
  };

  const filterStatus = (event) => {
    console.log(event.target.value);
    dispatch({ type: FILTER_STATUS, filter: event.target.value });
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <div onChange={filterStatus}>
        <input
          type="radio"
          id="all"
          name="type-todo"
          checked={todos.filter === "all"}
          value={"all"}
        />
        <label htmlFor="all">all</label>
        <br />
        <input
          type="radio"
          id="doing"
          name="type-todo"
          checked={todos.filter === "doing"}
          value={"doing"}
        />
        <label htmlFor="doing">doing</label>
        <br />
        <input
          type="radio"
          id="done"
          name="type-todo"
          checked={todos.filter === "done"}
          value={"done"}
        />
        <label htmlFor="done">done</label>
      </div>
      <br />
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <button onClick={addTodo}>add todo</button>
      <ul>
        {todos.todoList.map((todo, index) => (
          <ItemTodo
            todo={todo}
            key={index}
            handleDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </>
  );
}
