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
      className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"} p-4  ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} mx-2 relative top-[-24px] h-[60dvh] z-40 rounded min-w-[280px] max-w-[600px] overflow-y-auto	overflow-x-hidden	 sm:w-[600px] `}
    >
      {sortTodoList()?.map((todo) => (
        <TodoList
          todo={todo}
          key={todo.id}
          onHandlCompleted={onHandlCompleted}
          onHandleDelete={onHandleDelete}
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
