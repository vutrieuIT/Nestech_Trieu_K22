function ItemTodo({ todo, id, handleDelete }) {
  return (
    <div
      style={{
        width: "100px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <p>
        {todo.text} - {todo.status}
      </p>
      <button id={id} onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}

export { ItemTodo };
