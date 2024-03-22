function TodoInfo({ isDark, todoLists, setTodoLists }) {
  const updateTodo = todoLists.filter((todo) => todo.isDone !== true);

  function clearDoneTodo() {
    const updateTodo = todoLists.filter((todo) => todo.isDone !== true);

    setTodoLists(updateTodo);
  }
  return (
    <div
      className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"}   ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} absolute bottom-0 z-50  flex h-20 w-full  items-center   justify-between  px-8  sm:bottom-0`}
    >
      <p className="text-stone-500">
        {updateTodo.length > 0
          ? `${updateTodo.length} items  left`
          : "No active todos on your List"}
      </p>
      <button className="text-stone-500" onClick={clearDoneTodo}>
        clear completed
      </button>
    </div>
  );
}

export default TodoInfo;
