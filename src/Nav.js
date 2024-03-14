function Nav({ isDark, onHandleDarkMode }) {
  return (
    <nav className="font-josefinSans mb-16 flex items-center justify-between sm:w-[600px] ">
      <p
        className={`text-3xl font-semibold uppercase tracking-[0.4em] text-neutral-50 `}
      >
        todo
      </p>
      <button onClick={onHandleDarkMode}>
        {isDark ? (
          <img src="/images/icon-sun.svg" alt="moon" />
        ) : (
          <img src="/images/icon-moon.svg" alt="sun" />
        )}
      </button>
    </nav>
  );
}

export default Nav;
