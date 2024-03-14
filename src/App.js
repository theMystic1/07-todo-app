import Header from "./Header";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import SortOrder from "./SortOrder";
import Footer from "./Footer";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState("All"); // 'all', 'active', 'completed'

  useEffect(
    function () {
      const body = document.querySelector("body");
      if (isDark) {
        body.classList.toggle("darkMode");
        body.classList.toggle("lightMode");
      } else {
        body.classList.toggle("lightMode");
        body.classList.toggle("darkMode");
      }
    },
    [isDark],
  );
  function handleAddTodoList(e) {
    e.preventDefault();

    if (todo.length < 1) return;
    setTodoLists([
      ...todoLists,
      {
        item: todo,
        id: Date.now().toLocaleString(),
        isDone: false,
      },
    ]);

    setTodo("");
  }

  function handleRemoveTodo(id) {
    const updateTodo = todoLists.filter((todo) => todo.id !== id);

    setTodoLists(updateTodo);
  }
  function handleToggleDone(id) {
    const updatedTodo = todoLists.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );

    setTodoLists(updatedTodo);
  }

  function handleDarkMode() {
    setIsDark((isd) => !isd);
  }

  function handleTodos(e) {
    setTodo(e.target.value);
  }

  function sortTodoList() {
    switch (sortingCriteria) {
      case "All":
        return todoLists;
      case "Active":
        return todoLists.filter((todoList) => !todoList.isDone);
      case "Completed":
        return todoLists.filter((todoList) => todoList.isDone);
      default:
        return todoLists;
    }
  }
  return (
    <div
      className={`${isDark ? "bg-darkMode-main " : "bg-lightMode-main "} max-w-[600px]: font-josefinSans z-50 h-full min-w-[300px] sm:flex sm:flex-col sm:items-center  sm:justify-between`}
    >
      <Header
        isDark={isDark}
        onHandleDarkMode={handleDarkMode}
        todo={todo}
        onhandleTodo={handleTodos}
        onHandleTodoItem={handleAddTodoList}
      />
      <Todo
        isDark={isDark}
        onHandleDelete={handleRemoveTodo}
        onHandlCompleted={handleToggleDone}
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        sortTodoList={sortTodoList}
      />
      <SortOrder isDark={isDark} setSortingCriteria={setSortingCriteria} />
      <Footer />
    </div>
  );
}

export default App;
