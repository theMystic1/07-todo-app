function Form({ isDark, todo, onhandleTodo, onHandleTodoItem }) {
  return (
    <form className={`  `} onSubmit={onHandleTodoItem}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={onhandleTodo}
        className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"} p-4  ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} text-base outline-0 rounded w-full sm:w-[600px]`}
      />
    </form>
  );
}

export default Form;
