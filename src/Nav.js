function Nav({ isDark, onHandleDarkMode }) {
  return (
    <nav className="flex justify-between items-center mb-16 sm:w-[600px] ">
      <p
        className={`uppercase text-neutral-50 text-3xl tracking-[0.4em] font-semibold `}
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
