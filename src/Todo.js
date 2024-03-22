import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";

function Todo({
  isDark,
  todoLists,
  onHandlCompleted,
  onHandleDelete,
  sortTodoList,
  setTodoLists,
}) {
  return (
    <section
      className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"} p-4  ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} relative top-[-24px] z-40 mx-2 h-[60dvh] min-w-[280px] max-w-[600px] 	overflow-y-auto	 overflow-x-hidden rounded sm:w-[600px]`}
    >
      {sortTodoList()?.map((todo) => (
        <TodoList
          todo={todo}
          key={todo.id}
          onHandlCompleted={onHandlCompleted}
          onHandleDelete={onHandleDelete}
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          isDark={isDark}
        />
      ))}
      <TodoInfo
        setTodoLists={setTodoLists}
        isDark={isDark}
        todoLists={todoLists}
      />
    </section>
  );
}

export default Todo;
