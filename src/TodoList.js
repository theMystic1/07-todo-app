function TodoList({ todo, onHandlCompleted, onHandleDelete }) {
  const { item, isDone, id } = todo;
  return (
    <div className="z-10 grid grid-cols-[auto_1fr_auto]  border-b-2 border-slate-300 py-4">
      <div
        className={`h-6 w-6 rounded-full ${isDone ? "" : "border-2 border-solid border-stone-400"} mr-8 flex items-center justify-center ${isDone ? "bg-gradient-to-r from-sky-500 to-fuchsia-500" : ""}`}
        onClick={() => onHandlCompleted(id)}
      >
        {isDone && (
          <img className="w-4" src="/images/icon-check.svg" alt="check" />
        )}
      </div>
      <p
        className={`flex items-center text-[20px] ${isDone ? "text-slate-400 line-through" : ""}`}
      >
        {item}
      </p>
      <span
        className="flex items-center justify-center"
        onClick={() => onHandleDelete(id)}
      >
        <img src="images/icon-cross.svg" alt="cross" />
      </span>
    </div>
  );
}

export default TodoList;
