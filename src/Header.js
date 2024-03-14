import Form from "./Form";
import Nav from "./Nav";

function Header({
  isDark,
  onHandleDarkMode,
  todo,
  onhandleTodo,

  onHandleTodoItem,
}) {
  return (
    <header
      className={`bg-cover bg-center h-60 px-2 py-10 bg-gradient-to-t w-full sm:flex sm:flex-col sm:justify-between sm:items-center `}
      style={{
        backgroundImage: ` url(${isDark ? "/images/bg-desktop-light.jpg" : "/images/bg-desktop-light.jpg"} ) `,
      }}
    >
      <Nav isDark={isDark} onHandleDarkMode={onHandleDarkMode} />
      <Form
        isDark={isDark}
        todo={todo}
        onhandleTodo={onhandleTodo}
        onHandleTodoItem={onHandleTodoItem}
      />
    </header>
  );
}

export default Header;
