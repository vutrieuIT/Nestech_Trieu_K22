import React, { createContext, useState } from "react";
// Initiate Context
const TodoListContext = createContext();
// Provide Context
export const TodoListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <TodoListContext.Provider value={{ list, setList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContext;
