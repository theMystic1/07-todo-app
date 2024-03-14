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
      className={`h-60 w-full bg-gradient-to-t bg-cover bg-center px-2 py-10 sm:flex sm:flex-col sm:items-center sm:justify-between `}
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
