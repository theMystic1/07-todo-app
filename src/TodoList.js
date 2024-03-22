import { useState } from "react";

function TodoList({
  todo,
  onHandlCompleted,
  onHandleDelete,
  todoLists,
  setTodoLists,
}) {
  const { item, isDone, id, isDark } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editedItem) return;
    const updatedTodoLists = todoLists.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, item: editedItem } : todoItem,
    );
    setTodoLists(updatedTodoLists);
    setIsEditing(false);
  };

  return (
    <div className="b z-10 grid grid-cols-[auto_1fr_auto]  divide-stone-200 py-4">
      <div
        className={`h-6 w-6 rounded-full ${isDone ? "" : " "} mr-8 flex items-center justify-center  ${isDone ? "bg-gradient-to-r from-sky-500 to-fuchsia-500" : "border border-sky-500"}`}
        onClick={() => onHandlCompleted(id)}
      >
        {isDone && (
          <img className="w-4" src="/images/icon-check.svg" alt="check" />
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={editedItem}
          onChange={(e) => setEditedItem(e.target.value)}
          autoFocus
          className={`flex items-center border-0 text-[20px] outline-none ${isDark ? "  bg-lightMode-primary" : "bg-darkMode-primary"}  ${isDark ? "text-lightMode-secondary " : "text-darkMode-secondary "}`}
        />
      ) : (
        <p
          className={`flex items-center text-[20px] ${isDone ? "text-slate-400 line-through" : ""}`}
        >
          {item}
        </p>
      )}
      <div className="flex items-center">
        {isEditing ? (
          <button className="mr-8" onClick={handleSave}>
            Save
          </button>
        ) : (
          !isDone && (
            <button className="mr-8" onClick={handleEdit}>
              <img src="/images/edit-246-32.png" alt="edit" />
            </button>
          )
        )}
        <span
          className="flex items-center justify-center"
          onClick={() => onHandleDelete(id)}
        >
          <img src="images/icon-cross.svg" alt="cross" />
        </span>
      </div>
    </div>
  );
}

export default TodoList;
