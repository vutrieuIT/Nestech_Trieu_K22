import "./App.css";
import MyTodos from "./component/MyTodos";
import { TodoListProvider } from "./component/TodoListContext";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <MyTodos />
      </TodoListProvider>
    </div>
  );
}

export default App;
