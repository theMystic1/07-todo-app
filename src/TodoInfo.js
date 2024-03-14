function TodoInfo({ isDark, todoLists, setTodoLists }) {
  const updateTodo = todoLists.filter((todo) => todo.isDone !== true);

  function clearDoneTodo() {
    const updateTodo = todoLists.filter((todo) => todo.isDone !== true);

    setTodoLists(updateTodo);
  }
  return (
    <div
      className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"}   ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} absolute sm:bottom-0 bottom-0  flex items-center justify-between  w-full   z-50  h-20  px-8`}
    >
      <p className="text-stone-500">{updateTodo.length} items left</p>
      <button className="text-stone-500" onClick={clearDoneTodo}>
        clear completed
      </button>
    </div>
  );
}

export default TodoInfo;
